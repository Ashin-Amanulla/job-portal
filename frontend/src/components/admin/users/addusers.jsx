import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, Divider, FormControlLabel, IconButton, Stack, Switch, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import StyledTextfield from '../../../ui/styledTextfield';
import { addUser } from '../../../services/admin';
import { toast } from 'react-toastify';

export default function AddUser({ open, onClose,onSubmitted }) {

    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        addUser(data).then((res)=>{
            console.log(res);
            toast.success("Successfully added")
            dialogClose()
            onSubmitted && onSubmitted()
        }).catch((error)=>{
            console.error(error);
            toast.error(error.response.data.error)
        })
    }

    const dialogClose = () => {
        reset({})
        onClose()
    }

    return (
        <Dialog
            open={open}
            maxWidth="sm"
            fullWidth
        >
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={2}>
                <Typography variant='subtitle1' sx={{ color: 'primary.dark', fontWeight: 600 }}>Add User</Typography>
                <IconButton onClick={dialogClose}><Close /></IconButton>
            </Stack>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <Stack p={2} spacing={2}>
                    <Stack>
                        <Typography variant='subtitle2'>Name</Typography>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <StyledTextfield placeholder='Enter the name' {...field} />
                                    {errors.name && (
                                        <span style={errorMsgStyle}>
                                            {errors.name.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: 'Enter the Name' }}
                        />
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle2'>Email</Typography>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <StyledTextfield placeholder='Enter the email' {...field} />
                                    {errors.email && (
                                        <span style={errorMsgStyle}>
                                            {errors.email.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: 'Enter the email',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                              },
                        }}
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <Stack flexGrow={1}>
                            <Typography variant='subtitle2'>JNV</Typography>
                            <Controller
                                name="jnv"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <StyledTextfield placeholder='Enter JNV' {...field} />
                                        {errors.jnv && (
                                            <span style={errorMsgStyle}>
                                                {errors.jnv.message}
                                            </span>
                                        )}
                                    </>
                                )}
                                rules={{ required: 'Enter JNV' }}
                            />
                        </Stack>
                        <Stack flexGrow={1}>
                            <Typography variant='subtitle2'>Batch</Typography>
                            <Controller
                                name="batch"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <StyledTextfield placeholder='Enter Batch' {...field} />
                                        {errors.batch && (
                                            <span style={errorMsgStyle}>
                                                {errors.batch.message}
                                            </span>
                                        )}
                                    </>
                                )}
                                rules={{ required: 'Enter batch' }}
                            />
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Controller
                            name="contact"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <StyledTextfield placeholder='Enter mobile Number' {...field} />
                                    {errors.contact && (
                                        <span style={errorMsgStyle}>
                                            {errors.contact.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: 'Enter mobile number' }}
                        />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'end'}>
                        <Controller
                            name="super_admin"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <FormControlLabel
                                        control={
                                            <Switch  {...field} defaultChecked={false} value={false} />
                                        }
                                        label="Is Super Admin"
                                    />
                                </>
                            )}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={"end"} p={2} spacing={2}>
                    <Button variant='outlined' sx={{ borderColor: '#777', color: '#777' }} onClick={dialogClose}>Cancel</Button>
                    <Button variant='outlined' type='submit'>Submit</Button>
                </Stack>
            </form>
        </Dialog>
    )
}

const errorMsgStyle = {
    color: 'red',
    fontSize: '12px',
    fontStyle: 'italic'
}