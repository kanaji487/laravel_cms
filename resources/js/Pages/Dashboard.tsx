import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Sidebar } from "@/Components/ui/sidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset, SidebarFooter, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/Components/ui/sidebar";
import { Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/Components/ui/dropdown-menu';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <p>Hi</p>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <p>Article</p>
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
                                    <SidebarMenuButton className='bg-black text-white hover:bg-red-300'>
                                        {user.email}
                                        <i className="bi bi-chevron-up"></i>
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
