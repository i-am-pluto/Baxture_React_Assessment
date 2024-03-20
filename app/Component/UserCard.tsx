// UserCard.tsx
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Avatar, Card, Stack, Text, Group, Flex } from "@mantine/core";
import {
  IconStar,
  IconUserMinus,
  IconUserPlus,
  IconPhoneCall,
  IconTrash,
  IconWorld,
  IconAt,
} from "@tabler/icons-react";
import "./style.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const [following, setFollowing] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleFollowToggle = (userId: number) => {
    // Implement follow toggle functionality if needed
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Card.Section inheritPadding py="xs">
        <Stack align="center" gap={8}>
          <Avatar
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
            size={120}
            radius="50%"
            alt="it's me"
          />
          <Text fw={500} size="xl">
            {user.name} {following ? <IconStar size={18} /> : null}
          </Text>
        </Stack>
      </Card.Section>

      <Card.Section inheritPadding py="xs" style={{ alignSelf: "flex-start" }}>
        <Stack align="flex-start" justify="flex-start" gap={4}>
          <Flex justify="flex-start" align="center" direction="row" gap="4">
            <IconAt stroke={1.5} size={16} color="#868E96" />
            <a
              href={user.email}
              target="_blank"
              rel="noopener noreferrer"
              className="customLink"
              style={{ color: "#868E96", textDecoration: "none" }}
            >
            <Text ta="left" size="md" color="#868E96" onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }>
              {user.email}
            </Text>
            </a>
          </Flex>

          <Flex justify="flex-start" align="center" direction="row" gap="4">
            <IconPhoneCall stroke={1.5} size={16} color="#868E96" />
            <a
              href={user.phone}
              target="_blank"
              rel="noopener noreferrer"
              className="customLink"
              style={{ color: "#868E96", textDecoration: "none" }}
            >
              <Text
                ta="left"
                size="md"
                color="#868E96"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {user.phone}
              </Text>
            </a>
          </Flex>

          <Flex justify="flex-start" align="center" direction="row" gap="4">
            <IconWorld stroke={1.5} size={16} color="#868E96" />
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="customLink"
              style={{ color: "#868E96", textDecoration: "none" }}
            >
              <Text
                ta="left"
                size="md"
                color="#868E96"
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {user.website}
              </Text>
            </a>
          </Flex>
        </Stack>
      </Card.Section>
      <Card.Section style={{ width: "100%" }} py="md">
        <Group
          gap={4}
          style={{ width: "100%", flex: 1 }}
          align="center"
          justify="center"
        >
          {/* Implement follow and delete buttons */}
          {following ? (
            <Button
              variant="outline"
              color="rgba(224, 224, 224, 1)"
              onClick={() => setFollowing(!following)}
              style={{ flex: 1,color: 'black' }}
            >
              <>
                <IconUserMinus size={16} /> &nbsp; Unfollow{" "}
              </>
            </Button>
          ) : (
            <Button
              variant="filled"
              color="indigo"
              onClick={() => setFollowing(!following)}
              style={{ flex: 1 }}
            >
              <IconUserPlus size={16} /> &nbsp; Follow{" "}
            </Button>
          )}
          <Button
            variant="outline"
            onClick={() => onDelete(user.id)}
            style={{ flex: 1 }}
          >
            <>
              <IconTrash size={16} /> &nbsp; Delete
            </>
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default UserCard;
