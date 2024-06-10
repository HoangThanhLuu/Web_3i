"use client";
import React from "react";
import Link from "next/link";
import { IconType } from "react-icons"
import { BsFiletypeDoc, BsFilePpt } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";

interface FileProps {
    icon: IconType;
    label: string;
    type: string;
    link: string;
    size?: number | 18;
}

const DocumentFile: React.FC<FileProps> = ({
    icon,
    label,
    type,
    link,
    size
}) => {

    return (
        <Link className="text-[#71bc42] hover:text-[#4f832e]" href={link}>
            <span className=" inline-block mr-[7px] align-middle">
                {type === '.docx' || type === 'doc' ? <BsFiletypeDoc size={size} /> : ""}
                {type === '.xlsx' || type === 'xls' ? <SiMicrosoftexcel size={size} /> : ""}
                {type === '.pptx' || type === 'ppt' ? <BsFilePpt size={size} /> : ""}
            </span>
            <span className="inline-block align-middle">{label}</span>
        </Link>
    );
};

export default DocumentFile;
