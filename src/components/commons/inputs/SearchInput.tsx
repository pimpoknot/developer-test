'use client'

import React, { useState } from "react";
import { ActionIcon, Image, Input } from "@mantine/core";




export function SearchInput() {

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "teste@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "teste2@gmail.com",
    }
  ];

  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState(data)


 const filterSearch = (event: any) => {
  const value = event.target.value.toLowerCase();
  const filteredData = data.filter((user: any) => {
    return user.name.toLowerCase().includes(value);
  });


  setFilteredData(filteredData);
}

  const SearchButton = () => (
    <ActionIcon
      data-testid="nova-tarefa-evento-remove-button"
      size="xs"
      color="blue"
      radius="sm"
      variant="transparent"
      value={value}
      onClick={
        (event) => {
          event.preventDefault();
          setValue("");
        }
      }
    >
      <Image src="/search.svg" alt="search" width={24} height={24} />
    </ActionIcon>
  )

  return (
      <div className="container mx-auto max-w-5xl mt-8">
        <Input
          value={value}
          onChange={(event: any) => {
            setValue(event.currentTarget.value);
            filterSearch(event);
          }}
          rightSection={<SearchButton />}
          placeholder="Search"
          styles={
            {

              wrapper: {
                display: "flex",
                height: "60px",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(45, 45, 45, 1)",
                padding: "0 16px 0 16px",
                borderRadius: "12px",
                backgroundColor:"rgba(28, 28, 28, 1)",
                width: "100%",
                outline: "rgba(45, 45, 45, 1)"
              },
              input: {
                color: "rgba(135, 135, 135, 1)",
                fontSize: "16px",
                width: "100%",
                backgroundColor:"rgba(28, 28, 28, 1)",
                outline: "none",
              },
            }
          }

        />
      </div>
    
  );
}