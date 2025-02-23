import React from 'react';
import { usePage } from '@inertiajs/react';
import { NavUser } from '@/Components/ui/nav_user';

type Props = {}

const sidebar = (props: Props) => {
    const user = usePage().props.auth.user;

    return (
        <>
        </>
    )
}

export default sidebar