export interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	children?: React.ReactNode;
	closeOnOverlayClick?: boolean;
	title?: string;
	size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
	isCloseIconPresent?: boolean;
	closeBtnClass?: string;
}

export interface SEOProps {
	title: string;
	description: string;
	image: string;
	url: string;
}

export interface AuthLayoutProps {
	children: React.ReactNode;
	authRightImage?: React.ReactNode;
	isTopRightBlobShown?: boolean;
	isBottomLeftPadlockShown?: boolean;
}

export interface DeleteModalProps {
	onDelete: () => void;
	isOpen: boolean;
	onClose: () => void;
}

export type SettingsProps = {
	id?: number;
	name: string;
	path: string;
};

export type LanguageProps = {
	id?: number;
	label: string;
	value: string;
};
