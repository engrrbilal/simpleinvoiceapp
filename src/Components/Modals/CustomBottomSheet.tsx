import Divider from '@/utills/Divider';
import React from 'react';
import { TouchableOpacity, View, Text, Modal, StyleSheet } from "react-native";

const CustomBottomSheet = ({ visible, onClose, headerTitle, ModalBodyComponent, containerStyle = {} }: ICustomBottomSheet) => {
    return (
        <>
            <Modal
                style={{ justifyContent: 'flex-end', margin: 0 }}
                visible={visible}
                transparent
                onRequestClose={() => onClose()}
                animationType="slide"
            >
                <>

                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={[styles?.modalContainer, containerStyle]}>
                            <View style={styles?.headerContainer}>
                                <Text style={styles.modalTitleStyle}>{headerTitle ? headerTitle : "Modal"}</Text>
                                <TouchableOpacity onPress={() => onClose()}>
                                    <Text style={styles.modalCancelButtonStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            <Divider customStyles={{
                                borderBottomWidth: 3,
                                marginHorizontal: 0,
                            }} />
                            {ModalBodyComponent}
                        </View>
                    </View>
                </>

            </Modal>
        </>
    )

}
export default CustomBottomSheet


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerContainer: {
        paddingTop: 15,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    modalTitleStyle: {
        // color: Colors.themeBlack1,
        // fontSize: 16,
        // fontFamily: Fonts.medium_sf
    },
    modalCancelButtonStyle: {
        // color: Colors.themeBlue2,
        fontSize: 14,
    },
});
