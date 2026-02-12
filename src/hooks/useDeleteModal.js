import { useState } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useDeleteModal = (fetchData, deleteEndpoint) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);

    const openDeleteModal = (item) => {
        setDeleteItem(item);
        setModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteItem(null);
        setModalOpen(false);
    };

    const confirmDelete = async () => {
        if (!deleteItem) return;

        try {
            await axios.delete(`${baseUrl}/${deleteEndpoint}/${deleteItem.id}`)
        } catch (error) {
            console.error("failed to delete item");
        }

        closeDeleteModal();
    }

    return { modalOpen, deleteItem, openDeleteModal, closeDeleteModal, confirmDelete };
}