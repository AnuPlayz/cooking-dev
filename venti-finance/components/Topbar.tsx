import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";

export default function Topbar() {
    return (
        <div className="w-full h-16 bg-slate-800 flex flex-row text-white items-center justify-center p-3 dark">
            <div className="grow" />
            <Dropdown placement="bottom-end" >
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://media.discordapp.net/attachments/1106611314891161663/1156610140959670282/1.jpg"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold text-white">Signed in as</p>
                        <p className="font-semibold text-white">adubge3@gmail.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings" className="text-white">
                        My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings" className="text-white">Team Settings</DropdownItem>
                    <DropdownItem key="analytics" className="text-white">
                        Analytics
                    </DropdownItem>
                    <DropdownItem key="system" className="text-white">System</DropdownItem>
                    <DropdownItem key="configurations" className="text-white">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback" className="text-white">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" className="text-red-500">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}