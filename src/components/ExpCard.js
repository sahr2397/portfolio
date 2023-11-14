// @src/components/ExpCard.js

import React from 'react';
// Chakra imports
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets

function ExpCard({exp,color}) {
  let boxBg = useColorModeValue('gray.100 !important', `gray.700 !important`)
  let secondaryBg = useColorModeValue('gray.50', 'whiteAlpha.100')
  

  return (
    <Flex
      borderRadius="20px"
      bg={boxBg}
      h="345px"
      
      direction="column"
    >
      <Box p="20px">
        <Flex justifyContent="space-between">
        <HStack>
                          <Image src={exp.image} borderRadius='full' h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
        </Flex>

       
      </Box>
      <Flex
        bg={secondaryBg}
        w="100%"
        p="20px"
        borderBottomLeftRadius="inherit"
        borderBottomRightRadius="inherit"
        height="100%"
        direction="column"
      >
        <Text
          fontSize="sm"
          color="gray.400"
          lineHeight="24px"
          pe="40px"
          fontWeight="500"
          mb="auto"
        >
          <List align="left" spacing={3}>
            {exp.listItems.map((item, index) => (
              <ListItem key={index}>
                <ListIcon
                  boxSize={6}
                  as={ChevronRightIcon}
                  color={`${color}.400`}
                />
                {item}
              </ListItem>
            ))}
          </List>
        </Text>
        <Flex>
          <Flex me="25px">
            <HStack spacing={2}>
              {exp.badges.map((badge) => (
                <Badge key={badge.name} colorScheme={badge.colorScheme}>
                  {badge.name}
                </Badge>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ExpCard
