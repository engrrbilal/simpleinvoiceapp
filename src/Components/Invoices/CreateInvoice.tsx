import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import CreateInvoiceModal from './CreateInvoiceModal';
import CustomIcon from '../CustomIcon';
import { useTranslation } from 'react-i18next';
import { DefaultVariables } from '@/Theme';

export default function CreateInvoice(){
    const { t } = useTranslation();
    const [isCreateInvoice, setIsCreateInvoice] = useState(false);

    const showCreateInvoice = () => setIsCreateInvoice(true);

    const hideCreateInvoice = () => setIsCreateInvoice(false);

    return (
        <>
            <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={showCreateInvoice}>
                <CustomIcon name="add" size={24} color={DefaultVariables.Colors.white} IconFamilyType='MaterialIcons'/>
            </TouchableOpacity>
            </View>
            {
                isCreateInvoice && 
                <CreateInvoiceModal
                    headerTitle={t('createInvoice.title')}
                    visible={ isCreateInvoice }
                    onClose={ hideCreateInvoice }
                />
            }
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    backgroundColor: DefaultVariables.Colors.blue,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
