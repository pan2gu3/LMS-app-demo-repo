"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.'}),
    subject: z.string().min(1, { message: 'Subject is required.'}),
    topic: z.string().min(1, { message: 'Topic is required.'}),
    voice: z.string().min(1, { message: 'Voice is required.'}),
    style: z.string().min(1, { message: 'Style is required.'}),
    duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const companion = await createCompanion(values);

        if(companion) {
            redirect(`/companions/${companion.id}`);
        } else {
            console.log('Failed to create a companion');
            redirect('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Companion Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                Companion name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter the companion name"
                                    {...field}
                                    className="
                                        h-11 w-full rounded-lg border border-white/10
                                        bg-[#1a1a2e] text-white placeholder:text-white/30
                                        px-4 text-sm
                                        focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                        focus-visible:border-[#6c63ff]
                                        transition-colors
                                    "
                                />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Subject */}
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                Subject
                            </FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger
                                        className="
                                            h-11 w-full rounded-lg border border-white/10
                                            bg-[#1a1a2e] text-white
                                            px-4 text-sm capitalize
                                            data-[placeholder]:text-white/30
                                            focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                            focus-visible:border-[#6c63ff]
                                            transition-colors
                                        "
                                    >
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent
                                        className="
                                            bg-[#1a1a2e] border border-white/10
                                            text-white rounded-lg
                                        "
                                    >
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                value={subject}
                                                key={subject}
                                                className="
                                                    capitalize text-sm text-white/80
                                                    focus:bg-[#6c63ff]/20 focus:text-white
                                                    cursor-pointer
                                                "
                                            >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Topic */}
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                What should the companion help with?
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Derivates & Integrals"
                                    {...field}
                                    className="
                                        min-h-[96px] w-full rounded-lg border border-white/10
                                        bg-[#1a1a2e] text-white placeholder:text-white/30
                                        px-4 py-3 text-sm resize-none
                                        focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                        focus-visible:border-[#6c63ff]
                                        transition-colors
                                    "
                                />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Voice */}
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                Voice
                            </FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger
                                        className="
                                            h-11 w-full rounded-lg border border-white/10
                                            bg-[#1a1a2e] text-white
                                            px-4 text-sm
                                            data-[placeholder]:text-white/30
                                            focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                            focus-visible:border-[#6c63ff]
                                            transition-colors
                                        "
                                    >
                                        <SelectValue placeholder="Select the voice" />
                                    </SelectTrigger>
                                    <SelectContent
                                        className="
                                            bg-[#1a1a2e] border border-white/10
                                            text-white rounded-lg
                                        "
                                    >
                                        <SelectItem
                                            value="male"
                                            className="
                                                text-sm text-white/80
                                                focus:bg-[#6c63ff]/20 focus:text-white
                                                cursor-pointer
                                            "
                                        >
                                            Male
                                        </SelectItem>
                                        <SelectItem
                                            value="female"
                                            className="
                                                text-sm text-white/80
                                                focus:bg-[#6c63ff]/20 focus:text-white
                                                cursor-pointer
                                            "
                                        >
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Style */}
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                Style
                            </FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger
                                        className="
                                            h-11 w-full rounded-lg border border-white/10
                                            bg-[#1a1a2e] text-white
                                            px-4 text-sm
                                            data-[placeholder]:text-white/30
                                            focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                            focus-visible:border-[#6c63ff]
                                            transition-colors
                                        "
                                    >
                                        <SelectValue placeholder="Select the style" />
                                    </SelectTrigger>
                                    <SelectContent
                                        className="
                                            bg-[#1a1a2e] border border-white/10
                                            text-white rounded-lg
                                        "
                                    >
                                        <SelectItem
                                            value="formal"
                                            className="
                                                text-sm text-white/80
                                                focus:bg-[#6c63ff]/20 focus:text-white
                                                cursor-pointer
                                            "
                                        >
                                            Formal
                                        </SelectItem>
                                        <SelectItem
                                            value="casual"
                                            className="
                                                text-sm text-white/80
                                                focus:bg-[#6c63ff]/20 focus:text-white
                                                cursor-pointer
                                            "
                                        >
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Duration */}
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                                Estimated session duration in minutes
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15"
                                    {...field}
                                    className="
                                        h-11 w-full rounded-lg border border-white/10
                                        bg-[#1a1a2e] text-white placeholder:text-white/30
                                        px-4 text-sm
                                        focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60
                                        focus-visible:border-[#6c63ff]
                                        transition-colors
                                    "
                                />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                    )}
                />

                {/* Submit */}
                <Button
                    type="submit"
                    className="
                        w-full h-11 rounded-lg
                        bg-[#6c63ff] hover:bg-[#5b53e6]
                        text-white font-semibold text-sm
                        transition-colors cursor-pointer
                        shadow-[0_0_20px_rgba(108,99,255,0.35)]
                        hover:shadow-[0_0_28px_rgba(108,99,255,0.55)]
                    "
                >
                    Build Your Companion
                </Button>
            </form>
        </Form>
    )
}

export default CompanionForm
