import React from 'react';
import useForm from './useForm';

export default function CustomerInfo() {
    const {values, date} = useForm()
    return (
        <div>
            <p>{values.username}</p>
        </div>
    )
}
