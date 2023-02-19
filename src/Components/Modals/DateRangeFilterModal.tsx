import React, { useState } from 'react'
import CustomBottomSheet from './CustomBottomSheet'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { DATE_FORMATS } from '@/Constants/Date';
import { useTranslation } from 'react-i18next';
import { DefaultVariables } from '@/Theme';

export default function DateRangeFilterModal({
    visible,
    onClose,
    onPress,
    headerTitle,
    intialState,
}: IDateRangeModal) {
    const { t } = useTranslation();
    const [state, setState] = useState({ ...intialState })
    /* Custom form state set */
    const handleDateChange = (value: Date, name: string) => {
        const d = new Date(value);
        const formatedDate = moment(d).format(DATE_FORMATS.dateFormate);
        setState((state: any) => ({ ...state, [name]: formatedDate,
          isFromDatePickerVisible:false, isToDatePickerVisible:false
        }))
    }
    /* show date picker*/
    const showDatePicker = (name: string) => {
        setState((state: any) => ({ ...state, [name]: true }))
    }
    /* hide date picker*/
    const hideDatePicker = (name: string) => {
        setState((state: any) => ({ ...state, [name]: false }))
    }
    /* return  filters state  */
    const handleFilterSatate = () => {
        setState((state: any) => ({ ...state, isSelectModalVisible: false }))
        onClose()
        const filterState = {
            fromDate: state?.fromDate,
            toDate: state?.toDate,
        }
        onPress(filterState)
    }

    return (
        <>
            <CustomBottomSheet
                visible={visible}
                onClose={() => onClose()}
                headerTitle={headerTitle}
                containerStyle={{ height: "auto" }}
                ModalBodyComponent={
                    <View style={styles.container}>
                        <View style={styles.betweenContentContainer}>
                            <TouchableOpacity onPress={() => showDatePicker('isFromDatePickerVisible')}>
                                <Text style={styles.dateContainer}>{state?.fromDate ? moment(state?.fromDate).format(DATE_FORMATS.displayDate) : t('invoiceSortFilter.fromDate')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => showDatePicker('isToDatePickerVisible')}>
                                <Text style={styles.dateContainer}>{state?.toDate ? moment(state?.toDate).format(DATE_FORMATS.displayDate) : t('invoiceSortFilter.toDate')}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles?.buttonContainer}
                            onPress={() => handleFilterSatate()}>
                            <Text style={styles.buttonText}>
                                {t('invoiceSortFilter.apply')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            />
            {state?.isFromDatePickerVisible ?
                <DatePicker
                    modal
                    open={state?.isFromDatePickerVisible}
                    date={new Date(state?.fromDate)}
                    theme="light"
                    onConfirm={(date: Date) => handleDateChange(date, "fromDate")}
                    onCancel={() => hideDatePicker("isFromDatePickerVisible")}
                /> : null
            }
            {state?.isToDatePickerVisible ?
                <DatePicker
                    modal
                    open={state?.isToDatePickerVisible}
                    theme="light"
                    date={new Date(state?.toDate)}
                    onConfirm={(date: Date) => handleDateChange(date, "toDate")}
                    onCancel={() => hideDatePicker("isToDatePickerVisible")}
                /> : null
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    betweenContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    selectContainer: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: "100%",
    },
    dateContainer: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: 150,
    },
    title: {
        fontWeight: "400",
        fontSize: 14,
    },
    content: {
        maxWidth: 200,
        fontSize: 14,
    },
    buttonContainer: {
        marginTop: 10,
        padding: 12,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        color: DefaultVariables.Colors.blue
    }
})