import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import ListItemInvoice from './ListItemInvoice';
import NoData from '../Nodata';
import ListFooter from '../List/ListFooter';
import Divider from '@/utills/Divider';
import { getIsFetchingInvoices, getIsMoreDataAvailable } from '@/Store/selectors/features';
import { getInvoices, getInvoicesPagination } from '@/Store/selectors/entities';
import { fetchInvoices } from '../../Store/slices/features';
import { updatePagination } from '@/Store/slices/entities';


export default function InvoicesList() {

  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetchingInvoices);
  const invoicesList = useSelector(getInvoices);
  const pagination: IPagination = useSelector(getInvoicesPagination);
  const isMoreDataAvailable = useSelector(getIsMoreDataAvailable);
  const {pageNum, ordering, fromDate, toDate} = pagination;
  /* reference for flatlist to load more data or not */
  let onEndReachedCalledDuringMomentum = true;

  /*Component mounting fetch invoices*/
  useEffect(() => {
    /* fetch invoices on mount and while pagination/filters changed */
    dispatch(fetchInvoices(pagination))
    return () => undefined;
  }, [pageNum, ordering, fromDate, toDate])

  /* Load more data on end reached */
  const loadMoreData = () => {
    const updatedPagination: IPagination = {...pagination}
    updatedPagination.pageNum = updatedPagination.pageNum +1;
    dispatch(updatePagination(updatedPagination)) // increase pageNum
    if(isMoreDataAvailable && invoicesList.length){
      return invoicesList;
    } else {
      return []
    }
  };

  return (
    <View style={styles?.container}>
      <Divider customStyles={{ marginHorizontal: 0 }} />
      {isFetching && pagination.pageNum === 1 ?
        <Spinner /> :
        <>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={invoicesList}
              ListEmptyComponent={<NoData />}
              onEndReached={() => {
                if (!onEndReachedCalledDuringMomentum) {
                  loadMoreData();
                  onEndReachedCalledDuringMomentum = true;
                }
              }}
              ListFooterComponent={isMoreDataAvailable ? <ListFooter /> : null}
              onEndReachedThreshold={0.5}
              onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum = false; }}
              renderItem={({ item }: any) => {
                return (
                  <View
                    style={{ marginBottom: 5 }}
                  >
                    <ListItemInvoice item={item} />
                    <Divider />
                  </View>
                )
              }
              }
            />
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})
