import * as React from 'react';

export interface IModalItem {
    value: any;
    isOpen: boolean;
}

export interface IModalContext {
    modals: Record<string, IModalItem>;
    handleOpenModal: (key: string, value: any) => void;
    handleCloseModal: (key: string) => void;
    getIsOpen: (key: string) => boolean;
}

export const ModalContext = React.createContext<IModalContext>({
    modals: {},
    handleOpenModal: () => {},
    handleCloseModal: () => {},
    getIsOpen: () => false,
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modals, setModals] = React.useState<Record<string, IModalItem>>({});

    const handleOpenModal = (key: string, value: any) => {
        setModals((pre) => ({
            ...pre,
            [key]: {
                isOpen: true,
                value,
            },
        }));
    };

    const handleCloseModal = (key: string) => {
        setModals((pre) => ({
            ...pre,
            [key]: {
                isOpen: false,
                value: undefined,
            },
        }));
    };

    const getIsOpen = (key: string) => {
        return modals[key]?.isOpen || false;
    };

    return <ModalContext.Provider value={{ getIsOpen, handleCloseModal, handleOpenModal, modals }}>{children}</ModalContext.Provider>;
};

export const useModalContext = <T,>(key: string) => {
    const context = React.useContext(ModalContext);

    const handleOpenModal = (value: T) => context.handleOpenModal(key, value);
    const handleCloseModal = () => context.handleCloseModal(key);
    const getIsOpen = () => context.getIsOpen(key);

    return {
        modalValue: context.modals[key]?.value,
        handleOpenModal,
        handleCloseModal,
        getIsOpen,
    };
};
