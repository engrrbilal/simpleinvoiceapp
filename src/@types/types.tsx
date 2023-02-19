/**
 * Defined some of the common types
 */
type StackNavigationProp = import('@react-navigation/stack').StackNavigationProp<allAnyTypes, allAnyTypes>;
type ReactNode = import('react').ReactNode;
type ReactChild = import('react').ReactChild;
type ReactChildren = import('react').ReactChildren;
type Component = import('react').Component;
type TFunction = () => void;
type TObjectCorrect = Record<string, number | string | undefined | boolean | TFunction>;
type allAnyTypes = string | number | string[] | null | undefined | TFunction;
type TStringNoOrEmpty = string | number | null | undefined;
/**
 * Redux Store types/interfaces
 */
type TDispatch = import('store/index').AppDispatch;
type TReduxState = import('store/index').ReduxState;

interface IResponseData<T> {
    data?: T;
    statusMessage?: string;
    statusCode?: number;
    error?: boolean;
    statusText?: string;
}

interface IHttpRequestOptions {
    headers?: Record<string, string>;
    queryParams?: Record<string, string>;
}

interface IAsyncAction {
    data?: Record<string, any>;
    isLoading?: boolean;
    error?: allAnyTypes;
    statusCode?: allAnyTypes;
    statusText?: allAnyTypes;
    page?: number;
}

interface IInvoiceListItem {
    item: Record<string, any>;
    customStyles?: Record<string, any>;
};

interface IPagination {
    pageNum: number,
    pageSize: number,
    dateType: string,
    sortBy: string,
    ordering: string,
    fromDate: string,
    toDate: string,
};

type TIconFamilyType = 'FontAwesome' | 'AntDesign' |  'MaterialIcons' | 'Ionicons' | 'Entypo' | 'MaterialCommunityIcons'
 | 'EvilIcons' | 'Feather' | 'FontAwesome5' | 'Fontisto' | 'Foundation' | 'Octicons' | 'Zocial' | 'SimpleLineIcons';

interface ICustomIcon {
    name: string, 
    IconFamilyType: TIconFamilyType,
    color?: string, 
    size?: number
};

interface ITopbarHeader {
    titleText: string,
    leftIconName?: string,
    leftIconFamilyType?: TIconFamilyType,
    leftClickHandler?: () => void,
    rightClickHandler?: () => void,
    rightIconName?: string,
    rightComponent?: JSX.Element,
    noLeftIcon?: boolean,
    rightIconFamilyType?: TIconFamilyType,
};

interface ICustomBottomSheet {
    visible: boolean,
    onClose: () => void,
    headerTitle: string,
    ModalBodyComponent: JSX.Element,
    containerStyle: Record<string, any>
};

interface ICreateInvoiceModal {
    visible: boolean,
    onClose: () => void,
    headerTitle: string,
};

interface ICreateInvoiceData {
    amount: string,
    invoiceNumber: string,
    description: string,
    invoiceDate: string
};

interface IInvcoicesFilter {
    fromDate: string,
    toDate: string,
};

interface IDateRangeModal {
    visible: boolean,
    onClose: () => void,
    onPress: (data: IInvcoicesFilter) => void,
    headerTitle: string,
    intialState: Record<string, any>,
};
