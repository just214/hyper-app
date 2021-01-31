import * as React from "react";
import { ScrollView } from "react-native";
import { Layout } from "../components/Layout";
import { Block } from "../components/Block";
import { useStoreState } from "../store/hooks";

export default function ScheduleScreen() {
  // @ts-ignore
  const blocks = useStoreState((state) => state.blocks);

  return (
    <Layout>
      <ScrollView>
        {blocks.map((block: any) => {
          return <Block key={block.id} block={block} />;
        })}
      </ScrollView>
    </Layout>
  );
}
