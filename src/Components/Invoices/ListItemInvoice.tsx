import { DATE_FORMATS } from '@/Constants/Date';
import { DefaultVariables } from '@/Theme';
import Helper from '@/utills/Helper';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ListItemInvoice = ({
    item,
    customStyles,
}: IInvoiceListItem) => {
    const { t } = useTranslation();
    const { colors } = useTheme()
    const {invoiceNumber, invoiceDate,createdAt, totalAmount, totalDiscount, totalPaid, type, currency} = item;
    return (
        <View style={[styles.container, customStyles]} >
            <View style={styles?.betweenContentContainer}>
                <Text style={styles?.title}>{type} : {invoiceNumber}</Text>
                <Text style={styles?.content}>{moment(invoiceDate).format(DATE_FORMATS.displayDate)}</Text>
            </View>
            <View style={styles?.betweenContentContainer}>
                <Text style={[styles?.title]}>{t('invoice.createdAt')}</Text>
                <Text style={styles?.content}>{moment(createdAt).format(DATE_FORMATS.displayDate)}</Text>
            </View>
            <View style={styles?.betweenContentContainer}>
                <Text style={styles?.content}>{t('invoice.totalAmount')}</Text>
                <Text style={styles?.title}>{Helper?.numberFormate(totalAmount, currency)}</Text>
            </View>
            <View style={styles?.betweenContentContainer}>
                <Text style={styles?.content}>{t('invoice.discount')}</Text>
                <Text style={[styles?.title, { color: DefaultVariables.Colors.red}]}>{Helper?.numberFormate(totalDiscount, currency)}</Text>
            </View>
            <View style={styles?.betweenContentContainer}>
                <Text style={styles?.content}>{t('invoice.totalPaid')}</Text>
                <Text 
                    style={[styles?.title, { color: totalPaid >= totalAmount ? DefaultVariables.Colors.green: DefaultVariables.Colors.red}]}
                >
                    {Helper?.numberFormate(totalPaid, currency)}
                </Text>
            </View>
        </View >
    )
}
export default memo(ListItemInvoice)

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
    },
    headingContentContainer: {
        flexDirection: "column",
        alignItems: 'flex-start',
    },
    betweenContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical:2,
        alignItems: "center"
    },
    contentContainer: {
        flexDirection: "column",
        alignItems: 'flex-end',
    },
    title: {
        fontWeight: "500",
        color: DefaultVariables.Colors.black,
        fontSize: 14,
    },
    content: {
        color:DefaultVariables.Colors.grey,
        maxWidth: 200,
        fontSize: 14,
    }
})