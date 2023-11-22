import {
  Box,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  chakra
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import ProfileArray from './ProfileArray'

export default function Contact({ color }) {
  const profile = ProfileArray()
  const linkedin = () => {
    window.open(`${profile.linkedin}`, '_blank', 'noreferrer,noopener')
  }
  const github = () => {
    window.open(`${profile.github}`, '_blank', 'noreferrer,noopener')
  }
  const email = () => {
    window.open(`mailto:${profile.email}`, '_blank', 'noreferrer,noopener')
  }

  console.log(profile)
  return (
    <>
      <Container maxW={'3xl'} id="contact">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={'6xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'} fontFamily={'Nelphim'} fontWeight={400} >Let's Get in Touch!</Heading>
            <Text color={'gray.600'} fontSize={'xl'} px={2} >
              {profile.contact}
              <List align="center" my={4}>
                {profile.contactPoints.map((item, index) => (
                  <ListItem key={index} px={2}>
                   
                    <chakra.span color={`${color}.400`} fontWeight={600}>{item.q}</chakra.span>
                    {item.a}
                  </ListItem>
                ))}
              </List>
            </Text>
            <Text
              color={`${color}.500`}
              fontWeight={600}
              fontSize={'lg'}
              px={4}
            >
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
