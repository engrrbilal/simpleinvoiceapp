import React, {  useEffect, useState } from 'react'
import CustomBottomSheet from '../Modals/CustomBottomSheet'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createInvoice, fetchInvoices, resetCreateInvoice } from '@/Store/slices/features';
import { useSelector } from 'react-redux';
import { getIsInvoiceCreated, getIsInvoiceCreating } from '@/Store/selectors/features';
import { updatePagination } from '@/Store/slices/entities';
import { INTIAL_INVOICE_CREATE_DATA, INVOICE_DEFAULT_PAGINATION } from '@/Constants/Invoice';
import Spinner from '../Spinner';
import { useTranslation } from 'react-i18next';
import { DATE_FORMATS } from '@/Constants/Date';
import Helper from '@/utills/Helper';
import { DefaultVariables } from '@/Theme';

export default function CreateInvocieModal({
    visible,
    onClose,
    headerTitle,
}: ICreateInvoiceModal) {
    
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const [formState, setFormState] = useState(INTIAL_INVOICE_CREATE_DATA)
    const isInvoiceCreating = useSelector(getIsInvoiceCreating);
    const isInvoiceCreated = useSelector(getIsInvoiceCreated);

    useEffect(()=>{
        /* close modal when invoice created and fetch new list data */
        if(isInvoiceCreated){
            onClose();
            setTimeout(()=>{
                dispatch(updatePagination(INVOICE_DEFAULT_PAGINATION))
                dispatch(resetCreateInvoice())
                dispatch(fetchInvoices(INVOICE_DEFAULT_PAGINATION))
            },4000)
        }
    },[isInvoiceCreated])
    /* Custom form state set */
    const handleInput = (value: string | number, name: string) => {
        setFormState((state: any) => ({ ...state, [name]: value }));
    }

    const handleDateChange = (value: Date) => {
        const d = new Date(value);
        const formatedDate = moment(d).format(DATE_FORMATS.dateFormate);
        setFormState((state: any) => ({ ...state, invoiceDate: formatedDate }))
        hideDatePicker();
    }
    /* show date picker*/
    const showDatePicker = () => {
        setFormState((state: any) => ({ ...state, isDatePickerVisible: true }))
    }
    /* hide date picker*/
    const hideDatePicker = () => {
        setFormState((state: any) => ({ ...state, isDatePickerVisible: false }))
    }
    /* return  filters state  */
    const handleCreatInvoice = () => {
        if(formState.invoiceNumber.length > 3 && formState.amount){
            dispatch(createInvoice(formState));
        } else {
            Helper.showToast(t('createInvoice.formInvalidateText'))
        }
    }

    return (
        <>
            <CustomBottomSheet
                visible={visible}
                onClose={onClose}
                headerTitle={headerTitle}
                containerStyle={{ height: "auto" }}
                ModalBodyComponent={
                    <View style={styles.container}>
                        {isInvoiceCreating ?
                        <Spinner/> :
                        <>
                            <View style={styles.betweenContentContainer}>
                                <TextInput
                                    onChangeText={(value: string) => handleInput(value, 'invoiceNumber')}
                                    value={formState?.invoiceNumber}
                                    style={styles.inputField}
                                    placeholder={t('createInvoice.invoiceNo')}
                                />
                                <TextInput
                                    onChangeText={(value: string) => handleInput(value, 'amount')}
                                    value={formState?.amount}
                                    autoCapitalize='none'
                                    inputMode="numeric"
                                    keyboardType="number-pad"
                                    style={styles.inputField}
                                    placeholder={t('createInvoice.invoiceAmount')}
                                />
                            </View>
                            <View style={{width:"100%"}}>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={styles.dateContainer}>{formState?.invoiceDate ? 
                                        moment(formState?.invoiceDate).format(DATE_FORMATS.displayDate) : 
                                        t('createInvoice.invoiceDate')}</Text>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                onChangeText={(value: string) => handleInput(value, 'description')}
                                value={formState?.description}
                                autoCapitalize='none'
                                style={[styles.inputField, {width: "100%"}]}
                                placeholder={t('createInvoice.invoiceDes')}
                            />
                            <TouchableOpacity
                                style={styles?.buttonContainer}
                                onPress={handleCreatInvoice}
                                disabled={isInvoiceCreating}    
                            >
                                <Text style={styles.buttonText}>
                                    {t('createInvoice.createInvoice')}
                                </Text>
                            </TouchableOpacity>
                        </>
                        }
                    </View>
                }
            />
            {formState?.isDatePickerVisible ?
                <DatePicker
                    modal
                    open={formState?.isDatePickerVisible}
                    date={new Date(formState?.invoiceDate)}
                    theme="light"
                    onConfirm={(date) => handleDateChange(date)}
                    onCancel={hideDatePicker}
                /> : null
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
        minHeight:300
    },
    betweenContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    selectContainer: {
        borderWidth: 1,
        // borderColor: Colors.themeGray4,
        // color: Colors.themeBlack1,
        borderRadius: 5,
        padding: 10,
        width: "100%",
    },
    dateContainer: {
        borderWidth: 1,
        // borderColor: Colors.themeGray4,
        // color: Colors.themeBlack1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: "100%",
    },
    title: {
        // fontFamily: Fonts.bold_sf,
        fontWeight: "400",
        // color: Colors.themeBlack1,
        fontSize: 14,
    },
    content: {
        // fontFamily: Fonts.medium,
        maxWidth: 200,
        fontSize: 14,
        // color:Colors.themeBlack1
    },
    inputField: {
        borderWidth: 1,
        // borderColor: Colors.themeGray4,
        // color: Colors.themeBlack1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: "45%"
    },
    buttonContainer: {
        marginTop: 10,
        // color: Colors?.whiteColor,
        // backgroundColor: Colors?.ctaBackground,
        padding: 12,
        borderWidth: 1,
        // borderColor: Colors?.borderColor,
        marginBottom: 10,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: DefaultVariables.Colors.blue
    }
})