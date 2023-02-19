import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand, Spinner } from '@/Components'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useSelector } from 'react-redux'
import { getAccessToken, getUserOrgToken } from '../Store/slices/features'
import { useDispatch } from 'react-redux'
import { getIsAuthenticated, getIsAuthenticating, getIsOrgTokenFetched, getIsOrgTokenFetching } from '@/Store/selectors/features'

const SplashScreen = () => {
    const { t } = useTranslation()
    const { Layout, Fonts } = useTheme()
    const dispatch = useDispatch();

    const isAuthenticating = useSelector(getIsAuthenticating);
    const isAuthenticated = useSelector(getIsAuthenticated);
    const isOrgTokenFetching = useSelector(getIsOrgTokenFetching);
    const isOrgTokenFetched = useSelector(getIsOrgTokenFetched);

  useEffect(()=>{
      dispatch(getAccessToken())
  }, [])

  useEffect(()=>{
    if(isAuthenticated){
        dispatch(getUserOrgToken())
    }
  }, [isAuthenticated])

  useEffect(()=>{
    if(isOrgTokenFetched){
        navigateAndSimpleReset('Main')
    }
  }, [isOrgTokenFetched])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      {
        (isAuthenticating || isOrgTokenFetching) && 
        <Spinner size={'large'} />
      }
      <Text style={Fonts.textCenter}>{isAuthenticating ? t('authenticating') : t('fetchingUserData')}</Text>
    </View>
  )
}

export default SplashScreen
