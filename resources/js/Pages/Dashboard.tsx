import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Sidebar } from "@/Components/ui/sidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset, SidebarFooter, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/Components/ui/sidebar";
import { Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/Components/ui/dropdown-menu';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const getAvatar = (name : string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200`;

    return (
        <SidebarProvider>
            <Head title="Dashboard" />
            <Sidebar>
                <SidebarHeader>
                    <SidebarMenuItem className='list-none'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <SidebarMenuButton>
                                    <h1>Company</h1>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenuItem className='list-none'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className='flex justify-between'>
                                    <h1>Article</h1>
                                    <button type='button'>
                                        <i className="bi bi-plus-square-fill"></i>
                                    </button>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className="flex items-center w-full h-12 px-6 py-2 rounded-lg transition">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={getAvatar(user?.name || "Guest User")}
                                                alt="User Avatar"
                                                className="h-10 rounded-lg"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-sm">{user.email}</span>
                                                <span className="text-sm">{user.name}</span>
                                            </div>
                                            <i className="bi bi-chevron-up text-lg"></i>
                                        </div>
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                                >
                                    <DropdownMenuItem>
                                        <span>My accout</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Setting</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    );
}
