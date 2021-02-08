/**
 * Please review this code with caution as it is likely to make your brain explode.
 * But seriously, this component is a true marvel created by Mike Short.
 * It's responsible for rendering lists of items with excellent TypeScript support.
 */

import * as React from "react";

type Maybe<T> = T | null | undefined;

type GetKey<T extends object> =
  | keyof T
  | ((t: T, i?: number) => string | number);

type PropsList<P> = P[] | Record<string, P>;

type BaseRenderMultipleProps<L extends object, C extends object = {}> = {
  /**
   * The component to render for each list item. Props must match shape of `fromPropsList` prop
   */
  of: React.FC<L & C>;
  /**
   * An optional key to provide based on a common property in an array of objects
   */
  useKey?: GetKey<L>;
};

type WithoutCommonProps<P extends object> = BaseRenderMultipleProps<P> & {
  /**
   * The array of objects that you want to use to render a list.
   */
  fromPropsList: PropsList<P>;
};

type WithCommonProps<
  L extends object,
  C extends object
> = BaseRenderMultipleProps<L, C> & {
  /**
   * The array of objects that you want to use to render a list.
   */
  fromPropsList: PropsList<L>;
  withCommonProps: C;
};

const hasCommonProps = <L extends object, C extends object>(
  props: WithoutCommonProps<L> | WithCommonProps<L, C>
): props is WithCommonProps<L, C> => {
  const key: keyof WithCommonProps<L, C> = "withCommonProps";
  return props.hasOwnProperty(key);
};

const getKey = <P extends object>(
  useKey: Maybe<GetKey<P>>,
  props: P,
  i: number
) => {
  if (useKey == null) {
    return i;
  }
  const getKeyFn =
    typeof useKey === "function"
      ? useKey
      : (props: P): string => `${props[useKey]}`;
  return getKeyFn(props, i);
};

const toArray = <T,>(t: T[] | Record<string, T>): T[] => {
  return Array.isArray(t) ? t : Object.values(t);
};

export type RenderMultipleProps<P extends object> = Omit<
  WithoutCommonProps<P>,
  "withCommonProps" | "fromPropsList"
> & {
  fromPropsList: P[];
};

const Multiple = <L extends object>({
  of: Component,
  fromPropsList,
  useKey,
}: RenderMultipleProps<L>) => {
  const list = fromPropsList.map((ownProps, i) => {
    const key = getKey(useKey, ownProps, i);
    return <Component {...ownProps} key={key} />;
  });
  return <>{list}</>;
};

/**
 * Renders lists of items with first-class TypeScript support and serves as a replacement for `Array.map` in many use-cases.
 */
export const RenderMultiple = <L extends object, C extends object>(
  props: WithCommonProps<L, C> | WithoutCommonProps<L>
) => {
  if (hasCommonProps(props)) {
    const { fromPropsList, withCommonProps, ...rest } = props;
    const propsList = toArray(fromPropsList).map((ownProps) => ({
      ...ownProps,
      ...withCommonProps,
    }));
    return <Multiple fromPropsList={propsList} {...rest} />;
  }
  const { fromPropsList, ...rest } = props;
  const propsList = toArray(fromPropsList);

  return <Multiple fromPropsList={propsList} {...rest} />;
};
