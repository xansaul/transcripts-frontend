import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, Skeleton } from '@/components';


export const SkeletonCard = () => {
    return (
        <Card className="min-h-96 max-h-96">
            <CardHeader>
                <Skeleton className="h-4 w-6/12" />
                <CardDescription>
                    <Skeleton className="h-4 w-2/12" />
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-8/12" />
                <Skeleton className="h-4 w-5/12" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-8/12" />
                <Skeleton className="h-4 w-5/12" />
            </CardContent>
        </Card>
    )
}
