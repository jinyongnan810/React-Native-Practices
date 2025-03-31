import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  AddOrUpdateScreenNavigationProps,
  AddOrUpdateScreenRouteProp,
} from "../App";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { addExpense, removeExpense, updateExpense } from "../store/expenses";
import { RootState } from "../store/store";

const AddOrUpdateScreen = () => {
  const route = useRoute<AddOrUpdateScreenRouteProp>();
  const navigation = useNavigation<AddOrUpdateScreenNavigationProps>();
  const id = route.params?.id;
  const item = useSelector((state: RootState) =>
    state.expenses.expenses.find((v) => v.id === id)
  );

  const [title, setTitle] = React.useState(item?.title || "");
  const [amount, setAmount] = React.useState(item?.amount.toString() || "");

  const dispatch = useDispatch();

  const saveButton = useMemo(() => {
    return (
      <Button
        title={item ? "Save" : "Add"}
        onPress={() => {
          if (title.trim() === "" || amount.trim() === "" || isNaN(+amount)) {
            return;
          }
          if (item) {
            dispatch(updateExpense({ id: item.id, title, amount: +amount }));
          } else {
            dispatch(addExpense({ title, amount: +amount }));
          }
          navigation.goBack();
        }}
        color={"#fff"}
      />
    );
  }, [title, amount]);
  const cancelButton = useMemo(() => {
    return (
      <Button
        title="Cancel"
        onPress={() => {
          navigation.goBack();
        }}
        color={"#fff"}
      />
    );
  }, []);

  useEffect(() => {
    if (!item) {
      navigation.setOptions({
        title: "Add New Expense",
        headerLeft: () => cancelButton,
        headerRight: () => saveButton,
      });
    } else {
      navigation.setOptions({
        title: item.title,
        headerLeft: () => cancelButton,
        headerRight: () => saveButton,
      });
    }
  }, [title, amount]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <View style={styles.buttons}>
        <MyButton
          type="secondary"
          onClick={() => {
            navigation.goBack();
          }}
        >
          Cancel
        </MyButton>
        <MyButton
          type="primary"
          onClick={() => {
            if (title.trim() === "" || amount.trim() === "" || isNaN(+amount)) {
              return;
            }
            if (item) {
              dispatch(updateExpense({ id: item.id, title, amount: +amount }));
            } else {
              dispatch(addExpense({ title, amount: +amount }));
            }
            navigation.goBack();
          }}
        >
          {item ? "Update" : "Add"}
        </MyButton>
      </View> */}
        <View style={styles.inputs}>
          <MyInput
            label="Expense title"
            value={title}
            onSetValue={setTitle}
            type="default"
          />
          <MyInput
            label="Amount"
            value={amount}
            onSetValue={setAmount}
            type="decimal-pad"
          />
        </View>
        {item && (
          <MyButton
            type="danger"
            onClick={() => {
              dispatch(removeExpense(item.id));
              navigation.goBack();
            }}
          >
            Delete
          </MyButton>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 48,
  },
  buttons: {
    maxWidth: 500,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  inputs: {
    flex: 1,
    maxWidth: 500,
    paddingHorizontal: 16,
  },
});

export default AddOrUpdateScreen;
