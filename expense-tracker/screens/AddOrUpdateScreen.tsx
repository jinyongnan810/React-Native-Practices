import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
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
import Spacer from "../components/Spacer";
import {
  addExpenseApi,
  deleteExpenseApi,
  updateExpenseApi,
} from "../helper/HttpHelper";
import { addExpense, removeExpense, updateExpense } from "../store/expenses";
import { RootState } from "../store/store";

const AddOrUpdateScreen = () => {
  const route = useRoute<AddOrUpdateScreenRouteProp>();
  const navigation = useNavigation<AddOrUpdateScreenNavigationProps>();
  const id = route.params?.id;
  const item = useSelector((state: RootState) =>
    state.expenses.expenses.find((v) => v.id === id)
  );
  const isEditMode = !!item;
  const itemDate = new Date(item?.date ?? Date.now())
    .toISOString()
    .split("T")[0];

  const [title, setTitle] = React.useState(item?.title || "");
  const [date, setDate] = React.useState(itemDate || "");
  const [amount, setAmount] = React.useState(item?.amount.toString() || "");

  const [isTitleValid, setIsTitleValid] = React.useState(isEditMode);
  const [isDateValid, setIsDateValid] = React.useState(isEditMode);
  const [isAmountValid, setIsAmountValid] = React.useState(isEditMode);

  const checkValid = () => {
    const dateObj = new Date(date);
    setIsTitleValid(title.trim() !== "");
    setIsDateValid(!isNaN(dateObj.getTime()));
    setIsAmountValid(!isNaN(+amount) && +amount > 0);
  };

  useEffect(() => {
    checkValid();
  }, [title, date, amount]);

  const dispatch = useDispatch();

  const saveButton = useMemo(() => {
    return (
      <Button
        title={item ? "Save" : "Add"}
        disabled={!isTitleValid || !isDateValid || !isAmountValid}
        onPress={async () => {
          const dateObj = new Date(date);
          if (!isAmountValid || !isDateValid || !isTitleValid) {
            return;
          }
          if (item) {
            const updatedExpense = await updateExpenseApi(item.id, {
              title: title.trim(),
              amount: +amount,
              date: dateObj.getTime(),
            });
            if (!updatedExpense) {
              return;
            }
            dispatch(updateExpense(updatedExpense));
          } else {
            const newExpense = await addExpenseApi({
              title: title.trim(),
              amount: +amount,
              date: dateObj.getTime(),
            });
            if (!newExpense) {
              return;
            }
            dispatch(addExpense(newExpense));
          }
          navigation.goBack();
        }}
        color={"#fff"}
      />
    );
  }, [title, amount, date, isTitleValid, isDateValid, isAmountValid]);
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
  }, [title, amount, date]);

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
          <View style={styles.dateAndAmount}>
            <MyInput
              style={{ flex: 1 }}
              label="Date"
              value={date}
              onSetValue={setDate}
              type="default"
              placeholder="YYYY-MM-DD"
            />
            <MyInput
              style={{ flex: 1 }}
              label="Amount"
              value={amount}
              onSetValue={setAmount}
              type="decimal-pad"
            />
          </View>
          {!isTitleValid && (
            <Text style={styles.errorText}>Title is required.</Text>
          )}
          {!isDateValid && (
            <Text style={styles.errorText}>
              Date must in the format of YYYY-MM-DD.
            </Text>
          )}
          {!isAmountValid && (
            <Text style={styles.errorText}>
              Amount must be a positive number.
            </Text>
          )}
        </View>

        <Spacer />

        {item && (
          <MyButton
            type="danger"
            onClick={async () => {
              await deleteExpenseApi(item.id);
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
    maxWidth: 500,
    paddingHorizontal: 16,
  },
  dateAndAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  errorText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
});

export default AddOrUpdateScreen;
