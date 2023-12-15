'use client';

import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Add Your Props here
type User = {
	name: string;
	email: string;
	image: string;
};
interface StateContextProps {
	showMobileMenu: boolean;
	currentPath: string;
	openPaymentModal: boolean;
	setOpenPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
	setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isRemoveClientModal: boolean;
	setIsRemoveClientModal: React.Dispatch<React.SetStateAction<boolean>>;
	isRemoveProjectModal: boolean;
	setIsRemoveProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
	isProjectMiletoneModal: boolean;
	setIsProjectMiletoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	isEditMiletoneModal: boolean;
	setIsEditMiletoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	changeStatusModal: boolean;
	setChangeStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
	viewMilestoneModal: boolean;
	setViewMilestoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	createMilestoneModal: boolean;
	setCreateMilestoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	editProjectModal: boolean;
	setEditProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
	createProjectModal: boolean;
	setCreateProjectModal: React.Dispatch<React.SetStateAction<boolean>>;

	selectedProjectFilter: string;
	setSelectedProjectFilter: React.Dispatch<React.SetStateAction<string>>;
	projectSearchTerm: string;
	setProjectSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	selectedClientFilter: string;
	setSelectedClientFilter: React.Dispatch<React.SetStateAction<string>>;
	clientSearchTerm: string;
	setClientSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	createClientModal: boolean;
	setCreateClientModal: React.Dispatch<React.SetStateAction<boolean>>;

	user: User;
}

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
	// Mock-Data for user profile
	const user = useMemo(() => {
		return {
			name: 'Jane Doe',
			email: 'JohnDoe@gmail.com',
			image: '/facemoji.png'
		};
	}, []);
	// Add Your State(s) Here
	const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');
	const [projectSearchTerm, setProjectSearchTerm] = useState('');
	const [selectedClientFilter, setSelectedClientFilter] = useState('all-clients');
	const [clientSearchTerm, setClientSearchTerm] = useState('');

	// Track Modals State
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);
	const [openPaymentModal, setOpenPaymentModal] = useState(false);
	const [isRemoveClientModal, setIsRemoveClientModal] = useState(false);
	const [isRemoveProjectModal, setIsRemoveProjectModal] = useState(false);
	const [isProjectMiletoneModal, setIsProjectMiletoneModal] = useState(false);
	const [isEditMiletoneModal, setIsEditMiletoneModal] = useState(false);
	const [changeStatusModal, setChangeStatusModal] = useState(false);
	const [viewMilestoneModal, setViewMilestoneModal] = useState(false);
	const [createMilestoneModal, setCreateMilestoneModal] = useState(false);
	const [editProjectModal, setEditProjectModal] = useState(false);
	const [createProjectModal, setCreateProjectModal] = useState(false);
	const [createClientModal, setCreateClientModal] = useState(false);

	// AdminNav
	const [currentPath, setCurrentPath] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.startsWith('/admin-')) {
			setCurrentPath(pathname.replace(/^\/([^\/]+).*$/, '$1'));
			return;
		}
		if (pathname.startsWith('/')) {
			setCurrentPath(pathname.replace('/', ''));
			return;
		}
	}, [pathname]);

	useEffect(() => {
		if (
			showMobileMenu ||
			openPaymentModal ||
			isRemoveClientModal ||
			isRemoveProjectModal ||
			isProjectMiletoneModal ||
			isEditMiletoneModal ||
			changeStatusModal ||
			viewMilestoneModal ||
			createMilestoneModal ||
			editProjectModal ||
			createProjectModal ||
			createClientModal
		) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShowMobileMenu(false);
				setOpenPaymentModal(false);
				setIsRemoveClientModal(false);
				setIsRemoveProjectModal(false);
				setIsProjectMiletoneModal(false);
				setIsEditMiletoneModal(false);
				setChangeStatusModal(false);
				setViewMilestoneModal(false);
				setCreateMilestoneModal(false);
				setEditProjectModal(false);
				setCreateProjectModal(false);
				setCreateClientModal(false);
			}
		};

		document.addEventListener('keyup', handleKeyDown);

		return () => {
			document.removeEventListener('keyup', handleKeyDown);
		};
	}, [
		showMobileMenu,
		openPaymentModal,
		isRemoveClientModal,
		isRemoveProjectModal,
		isProjectMiletoneModal,
		isEditMiletoneModal,
		changeStatusModal,
		viewMilestoneModal,
		createMilestoneModal,
		editProjectModal,
		createProjectModal,
		createClientModal
	]);

	const value = useMemo(
		() => ({
			showMobileMenu,
			setShowMobileMenu,
			currentPath,
			user,
			openPaymentModal,
			setOpenPaymentModal,
			isRemoveClientModal,
			setIsRemoveClientModal,
			isRemoveProjectModal,
			setIsRemoveProjectModal,
			isProjectMiletoneModal,
			setIsProjectMiletoneModal,
			isEditMiletoneModal,
			setIsEditMiletoneModal,
			changeStatusModal,
			setChangeStatusModal,
			viewMilestoneModal,
			setViewMilestoneModal,
			createMilestoneModal,
			setCreateMilestoneModal,
			editProjectModal,
			setEditProjectModal,
			createProjectModal,
			setCreateProjectModal,

			selectedProjectFilter,
			setSelectedProjectFilter,
			projectSearchTerm,
			setProjectSearchTerm,

			selectedClientFilter,
			setSelectedClientFilter,
			clientSearchTerm,
			setClientSearchTerm,

			createClientModal,
			setCreateClientModal
		}),
		[
			showMobileMenu,
			currentPath,
			user,
			openPaymentModal,
			isRemoveClientModal,
			isRemoveProjectModal,
			isProjectMiletoneModal,
			isEditMiletoneModal,
			changeStatusModal,
			viewMilestoneModal,
			createMilestoneModal,
			editProjectModal,
			createProjectModal,

			selectedProjectFilter,
			projectSearchTerm,

			selectedClientFilter,
			clientSearchTerm,

			createClientModal
		]
	);

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

// Call this function whenever you want to use the context
export const useStateCtx = () => {
	const ctx = useContext(StateContext);

	if (!ctx) {
		throw new Error('useStateCtx must be used within a StateContextProvider');
	}
	return ctx;
};

export default StateContextProvider;
