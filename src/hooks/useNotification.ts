import { useState, useCallback } from 'react';
import { NotificationType } from '@/types';

interface Notification {
    message: string;
    type: NotificationType;
    id: number;
}

export const useNotification = (duration = 3000) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const showNotification = useCallback((
        message: string,
        type: NotificationType = 'info'
    ) => {
        const id = Date.now();

        setNotifications(prev => [...prev, { message, type, id }]);

        setTimeout(() => {
            setNotifications(prev => prev.filter(notification => notification.id !== id));
        }, duration);
    }, [duration]);

    const removeNotification = useCallback((id: number) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, []);

    return {
        notifications,
        showNotification,
        removeNotification
    };
};