import React from 'react'
import { StatusBar, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setInvoicesSearchTerm } from '@/Store/slices/features'
import { InvoicesList, CreateInvoice } from '@/Components'
import { InputSearch, InvoicesSortFilter } from '@/Components'
import { useSelector } from 'react-redux'
import { getInvoicesSearchTerm } from '@/Store/selectors/features'
import TopBarHeader from '@/Components/TopBarHeader'

const InvoicesScreen = () => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const dispatch = useDispatch();
  const searchText = useSelector(getInvoicesSearchTerm);

  const handleSearch = (text: string) => {
    dispatch(setInvoicesSearchTerm(text))
  }

  return (
    <View
      style={Layout.fill}
    >
      <StatusBar
        barStyle={"light-content"}
      />
      <TopBarHeader
        titleText={t('invoices.title')}
        noLeftIcon={true}
        rightComponent={<InvoicesSortFilter />}
      />
      <View style={{ height: 40 }}>
        <InputSearch
          marginTop={10}
          value={searchText}
          placeholder={t('invoices.searchInvoices')}
          onChangeText={handleSearch}
        />
      </View>
      <InvoicesList />
      <CreateInvoice />
    </View>
  )
}

export default InvoicesScreen
