const SidebarLink = ({ text, Icon, active }) => {
    return (
        <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
            <Icon className="h-6" />
            <span className="hidden xl:inline text-[1.1rem]">{text}</span>
        </div>
    )
}

export default SidebarLink
