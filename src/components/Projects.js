import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Fade } from 'react-reveal'
import OtherProjectsArray from './OtherProjectsArray'
import ProjectsArray from './ProjectsArray'
import TagsArray from './TagsArray'

export default function Projects({ color }) {
  const projects = ProjectsArray()
  const others = OtherProjectsArray()
  const options = TagsArray('ProjectsTags')

  const [selected, setSelected] = useState('All')

  const handleSelected = (value) => {
    setSelected(value)
  }

  console.log(projects)

  return (
    <>
      {' '}
      <VStack>
        <Container maxW={'3xl'} id="projects">
          <Stack align="center" direction="row" pb={{ base: 8, md: 14 }}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
        </Container>

        <Container maxW={'7xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            alignItems="center"
          >
            <Stack px={4} spacing={4}>
              {projects.map((project,index) => (
                <Fade key={index} bottom>
                  <Flex
                    align="center"
                    justify={{
                      base: 'center',
                      md: 'space-around',
                      xl: 'space-between',
                    }}
                    direction={{
                      base: 'column-reverse',
                      md: index % 2 === 0 ? 'row' : 'row-reverse',
                    }}
                    wrap="no-wrap"
                    px={8}
                    mb={16}
                  >
                    <Box
                      w={{ base: '80%', sm: '60%', md: '50%' }}
                      mb={{ base: 12, md: 0 }}
                      minH={10}
                    >
                      <Image
                        src={project.image}
                        size="100%"
                        rounded="1.5rem"
                        shadow="2xl"
                      />
                    </Box>

                    <Stack
                      spacing={4}
                      w={{ base: '80%', md: '40%' }}
                      align={['center', 'center', 'flex-start', 'flex-start']}
                    >
                      <Heading
                        as="h1"
                        size="xl"
                        fontWeight={400}
                        fontFamily={'Nelphim'}
                        color="primary.800"
                        textAlign={['center', 'center', 'left', 'left']}
                        pb={8}
                      >
                        {project.name}
                      </Heading>
                      <Text
                        color={'gray.600'}
                        fontSize={'md'}
                        px={4}
                        lineHeight="32px"
                        pe="40px"
                        mb="auto"
                        textAlign={['center', 'center', 'left', 'left']}
                      >
                        <List align="left">
                          {project.description.map((item, index) => (
                            <ListItem key={index} px={2}>
                              <ListIcon
                                boxSize={5}
                                as={ChevronRightIcon}
                                color={`${color}.400`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Text>
                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text} <ExternalLinkIcon mx={2}/>
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      {/* <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack> */}
                    </Stack>
                  </Flex>

                  {/* <Card
                  key={project.name}
                  
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />
                  

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card> */}
                </Fade>
              ))}
            </Stack>
            <Text color={'gray.600'} fontSize={'xl'} px={4}>
              Other Projects
            </Text>
            <Center px={4}>
              <ButtonGroup variant="outline">
                <Button
                  colorScheme={selected === 'All' ? `${color}` : 'gray'}
                  onClick={() => handleSelected('All')}
                >
                  All
                </Button>
                {options.map((option) => (
                  <Button
                    colorScheme={
                      selected === option.value ? `${color}` : 'gray'
                    }
                    onClick={() => handleSelected(option.value)}
                  >
                    {option.value}
                  </Button>
                ))}
              </ButtonGroup>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
              {others
                .filter((other) => {
                  if (selected === 'All') {
                    return true
                  } else {
                    return other.tags.includes(selected)
                  }
                })
                .map((other) => (
                  <Fade bottom>
                    <Card key={other.name}>
                      <Stack>
                        <CardBody align="left" h={[null, '40vh']}>
                          <Heading size="sm">{other.name}</Heading>

                          <Text fontSize="sm" py={2}>
                            {other.description}
                          </Text>

                          <HStack spacing={2}>
                            {other.buttons.map((button) => (
                              <Link
                                key={button.text}
                                href={button.href}
                                color={`${color}.400`}
                              >
                                {button.text}
                              </Link>
                            ))}
                          </HStack>
                          <HStack flexWrap="wrap" pt={4} spacing={2}>
                            {other.badges.map((badge) => (
                              <Badge
                                my={2}
                                key={badge.text}
                                colorScheme={badge.colorScheme}
                              >
                                {badge.text}
                              </Badge>
                            ))}
                          </HStack>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Fade>
                ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </VStack>
    </>
  )
}
