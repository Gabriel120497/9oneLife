"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { format } from "date-fns";
import {CalendarIcon, Loader2} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";


const formSchema = z.object({
	name: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email().min(1),
	dateOfBirth: z.date().optional(),
	role: z.string().optional(),
});

export function EmployeeForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			lastName: "",
			email: "",
		},
	});

	// Temporal function, we should call db here
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				noValidate
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Employee&#x27;s name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input placeholder="Employee&#x27;s last name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dateOfBirth"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date of birth</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground",
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										// disabled={(date) =>
										//   date > new Date() || date < new Date("1900-01-01")
										// }
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormDescription>
								Your date of birth is used to calculate your age.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="role"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Role</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a role" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="admin">Admin</SelectItem>
									<SelectItem value="user">User</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>Employee&#x27;s role</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="w-full flex items-center mt-8">
					<Button
						className="min-w-full
          sm:ml-[auto] sm:min-w-[158px] "
						type="submit"
					>
						Crear
					</Button>
				</div>
			</form>
		</Form>
	);
}
