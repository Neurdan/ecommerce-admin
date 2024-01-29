"use client"

import { useState } from "react";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName
}) => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params?.storeId}`;

    return (
        <>
            <ApiAlert 
                title="GET" 
                description={`${baseUrl}/${entityName}`} 
                variant="public" 
            />
            <ApiAlert 
                title="GET" 
                description={`${baseUrl}/${entityName}/{${entityIdName}}`} 
                variant="public" 
            />
            <ApiAlert 
                title="POST" 
                description={`${baseUrl}/${entityName}`} 
                variant="admin" 
            />
            <ApiAlert 
                title="PATCH" 
                description={`${baseUrl}/${entityName}/{${entityIdName}}`} 
                variant="admin" 
            />
            <ApiAlert 
                title="DELETE" 
                description={`${baseUrl}/${entityName}/{${entityIdName}}`} 
                variant="admin" 
            />
        </>
    )
}