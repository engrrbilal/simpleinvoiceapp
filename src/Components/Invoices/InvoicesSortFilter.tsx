import { getInvoicesPagination } from '@/Store/selectors/entities'
import { updatePagination } from '@/Store/slices/entities'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View,TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomIcon from '../CustomIcon'
import DateRangeFilterModal from '../Modals/DateRangeFilterModal'

export default function InvoicesSortFilter() {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const pagination: IPagination = useSelector(getInvoicesPagination);
    const {fromDate, toDate} = pagination;

    /* sort invoices asc/desc by updating pagination */
    const handleSortInvoices = () => {
        const clonedPagination = {...pagination};
        clonedPagination.pageNum = 1; // reset to page 1 incase last page is > 1
        clonedPagination.ordering = clonedPagination.ordering ==='DESCENDING' ? 'ASCENDING': 'DESCENDING';
        dispatch(updatePagination(clonedPagination))
    }
    
    const handleFilterModal = () => setIsFilterModalVisible((prevState) => !prevState);

    /* filter invoices by updating pagination */
    const handleFilterInvoices = (filterData: IInvcoicesFilter) => {
        const clonedPagination = {...pagination};
        clonedPagination.pageNum = 1; // reset to page 1 incase last page is > 1
        clonedPagination.fromDate = filterData?.fromDate;
        clonedPagination.toDate = filterData?.toDate;
        dispatch(updatePagination(clonedPagination))
    }
    
    return (
        <>
            <View style={[styles.container]}>
                <TouchableOpacity onPress={ handleSortInvoices }>
                    <CustomIcon  name='sort' IconFamilyType='FontAwesome'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ handleFilterModal } style={styles.marginLeft}>
                    <CustomIcon name='filter' IconFamilyType='FontAwesome'/>
                </TouchableOpacity>
            </View>
            {/* Filter modal*/}
            {
                isFilterModalVisible ?
                <DateRangeFilterModal
                    intialState = {{fromDate, toDate}}
                    visible={isFilterModalVisible}
                    onClose={ handleFilterModal }
                    headerTitle={t('invoicesSortFilter.filters')}
                    onPress={ handleFilterInvoices }
                /> : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flexDirection: 'row',
    },
    marginLeft: {
        marginLeft: 10,
    }
})