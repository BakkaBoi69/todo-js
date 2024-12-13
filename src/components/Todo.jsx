"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import MyCard from "./MyCard";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const Todo = () => {
    const [cards, setCards] = useState([]);
    const [inputs, setInputs] = useState({
        title: "",
        desc: "",
        content: "",
        completion: false,
    });

    const changeInputs = (name, value) => {
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddCard = () => {
        const { title, desc, content } = inputs;

        if (!title.trim()) {
            toast("Title cannot be empty");
            return;
        }
        if (!desc.trim()) {
            toast("Description cannot be empty");
            return;
        }
        if (!content.trim()) {
            toast("Content cannot be empty");
            return;
        }
        
        setCards((prev) => [
            ...prev,
            { id: Date.now(), ...inputs },
        ]);
        setInputs({ title: "", desc: "", content: "", completion: false });
    };

    const toggleStatus = (id) => {
        console.log("toggleStatus triggered");
        setCards((prev) =>
            prev.map((card) =>
                card.id === id
                    ? { ...card, completion: !card.completion }
                    : card
            )
        );
    };

    return (
        <div className="flex flex-col max-content rounded-lg items-center gap-8 justify-start">
            <Card className="max-content bg-card text-card-foreground flex flex-col">
                <CardHeader className="flex flex-col gap-2">
                    <CardTitle>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={inputs.title}
                            onChange={(e) => changeInputs(e.target.name, e.target.value)}
                        />
                    </CardTitle>
                    <CardDescription>
                        <Input
                            type="text"
                            name="desc"
                            placeholder="Description"
                            value={inputs.desc}
                            onChange={(e) => changeInputs(e.target.name, e.target.value)}
                        />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        type="text"
                        name="content"
                        placeholder="Content"
                        value={inputs.content}
                        onChange={(e) => changeInputs(e.target.name, e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant="secondary" onClick={handleAddCard}>
                        Add Card
                    </Button>
                </CardFooter>
            </Card>
            <div className="flex gap-6 flex-wrap">
                {cards.map((card) => (
                    <MyCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        desc={card.desc}
                        content={card.content}
                        completion={card.completion}
                        toggleFunction={toggleStatus}
                    />
                ))}
            </div>
            <Toaster />
        </div>
    );
};

export default Todo;