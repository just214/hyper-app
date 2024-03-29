import * as React from "react";
import {
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { View } from "../components/View";
import { Card } from "../components/Card";
import { ListItem } from "../components/ListItem";
import { useForm } from "react-hook-form";
import { AddButton } from "../components/AddButton";
import { TimerForm } from "../components/form/TimerForm";
import { DueDateTimeForm } from "../components/form/DueDateTimeForm";
import { TextInputControl } from "../components/form/TextInputControl";
import { Icon } from "../components/Icon";
import { Text } from "../components/Text";
import { padNumber } from "../utils";
import { useStoreActions } from "../store";

function generateTimerValue(hours: number, minutes: number) {
  if (!hours && !minutes) {
    return undefined;
  } else {
    return `${hours ? padNumber(hours) + (hours === 1 ? " hr" : " hrs") : ""} ${
      minutes ? padNumber(minutes) + (minutes === 1 ? " min" : " mins") : ""
    } `;
  }
}

export function BlockFormScreen({ navigation }: any) {
  const createBlock = useStoreActions((actions) => actions.createBlock);
  const { control, handleSubmit, errors, getValues, watch } = useForm();

  const [activeOption, setActiveOption] = React.useState<
    null | "timer" | "duedate" | "reminder" | "automate"
  >(null);

  const [showSettings, setShowSettings] = React.useState(false);
  const [showUrl, setShowUrl] = React.useState(false);
  const { timer_minutes, timer_hours } = watch();

  React.useEffect(() => {
    setShowSettings(activeOption ? true : false);
  }, [activeOption]);

  function onSubmit(values: any) {
    createBlock(values);
  }

  return (
    <>
      {/* <Modal isVisible={showModal} onRequestClose={() => setShowModal(false)}>
        <View>
          <TimerForm control={control} getValues={getValues} />
        </View>
      </Modal> */}
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Card>
            <TextInputControl
              control={control}
              name="title"
              rules={{ required: true }}
              defaultValue=""
              placeholder="Title"
              size="lg"
              autoFocus={true}
            />

            <TextInputControl
              control={control}
              name="notes"
              multiline={true}
              defaultValue=""
              placeholder="notes"
              size="md"
              style={{ paddingBottom: 20 }}
            />

            {showUrl && (
              <TextInputControl
                control={control}
                name="url"
                defaultValue=""
                placeholder="url"
                size="md"
                style={{ paddingBottom: 20 }}
              />
            )}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <AddButton title="Label" onPress={() => console.log("yay")} />
              {!showUrl && (
                <AddButton title="Url" onPress={() => setShowUrl(true)} />
              )}

              <AddButton title="File" onPress={() => console.log("yay")} />
              <AddButton title="Checklist" onPress={() => console.log("yay")} />
            </View>
          </Card>

          <Card
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1, display: showSettings ? "none" : "flex" }}>
              <ListItem
                onPress={() => setActiveOption("timer")}
                icon="stopwatch"
                label="Set Timer"
                value={generateTimerValue(timer_hours, timer_minutes)}
              />

              <ListItem
                onPress={() => setActiveOption("duedate")}
                icon="calendar-day"
                label="Set Due Date"
              />

              <ListItem
                onPress={() => setActiveOption("reminder")}
                icon="bell"
                label="Set Reminder"
              />
              <ListItem
                onPress={() => setActiveOption("automate")}
                icon="robot"
                label="Automate this Block"
              />
            </View>

            <View style={{ display: showSettings ? "flex" : "none" }}>
              <View
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={() => setActiveOption(null)}>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "yellow",
                      padding: 20,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="angle-left" style={{ marginRight: 10 }} />
                    <Text>Back</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  opacity: activeOption === "timer" ? 1 : 0,
                  height: activeOption === "timer" ? "100%" : 0,
                }}
              >
                <TimerForm
                  control={control}
                  defaultMinutes={timer_minutes}
                  defaultHours={timer_hours}
                />
              </View>

              <View
                style={{
                  opacity: activeOption === "duedate" ? 1 : 0,
                  height: activeOption === "duedate" ? "100%" : 0,
                }}
              >
                <DueDateTimeForm control={control} />
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
