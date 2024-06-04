'use client';

import { Field, Label, Switch } from '@headlessui/react'

const HeadlessSwitch = ({ label, value, handler }: { label: string, value: boolean, handler: () => void }) => {
    return (
        <Field className="flex flex-row items-center gap-2 text-gray-400 text-sm">
            <Label>{label}</Label>
            <Switch
                checked={value}
                onChange={handler}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-emerald-600"
            >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
        </Field>
    )
}

export default HeadlessSwitch;