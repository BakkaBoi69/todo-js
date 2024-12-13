"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// const cardDetails = {
//     title: "",
//     desc: "",
//     content: ""
// }

export default function MyCard({ id, title, desc, content, completion, toggleFunction}) {
    const handleToggle = () => {
        toggleFunction(id);
    }
    return (
        <Card className={`${completion ? 'bg-gray-600': 'bg-card'} text-card-foreground max-content flex flex-col`} >
            <CardHeader className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Checkbox name="completed" checked={completion} onClick={handleToggle}/>
                </div>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="secondary">Edit Card</Button>
                <Button variant="destructive">Delete Card</Button>
            </CardFooter>
        </Card>
    );
}