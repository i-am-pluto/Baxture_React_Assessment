// ParentComponent.tsx
"use client";
import React, { useState, useEffect } from "react";
import UserCard from "./Component/UserCard";
import { Grid, Flex } from "@mantine/core";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}

const ParentComponent = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = async (userId: number) => {
    try {
      // Update the users state by filtering out the deleted user
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Flex pe={4} ps={4} me={8} ms={8}>
      <Grid gutter="lg">
        {users.map((user) => (
          <Grid.Col key={user.id} span={{
            base: 12, // 1 per row on sm
            sm: 6,   // 2 per row on md
            md: 6,   // 2 per row on md
            lg: 3,   // 4 per row on lg
          }}>
          <UserCard user={user} onDelete={handleDeleteUser} />
        </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};

export default ParentComponent;
