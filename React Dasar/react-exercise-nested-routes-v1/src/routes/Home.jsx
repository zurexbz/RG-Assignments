import React from "react"
import { Link } from "react-router-dom"
import people from "../assets/people.jpeg"
import planets from "../assets/planets.jpeg"
import movies from "../assets/movies.jpeg"
import { Container } from "@chakra-ui/react"
import { Card, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react"

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        <Link to ={"/star-wars/people"}>
            <Card>
              <CardBody>
                <Image src={people}></Image>
                <Text>People</Text>
              </CardBody>
            </Card>
        </Link>
        <Link to ={"/star-wars/planets"}>
            <Card>
              <CardBody>
                <Image src={planets}></Image>
                <Text>Planets</Text>
              </CardBody>
            </Card>
        </Link>
        <Link to ={"/star-wars/movies"}>
            <Card>
              <CardBody>
                <Image src={movies}></Image>
                <Text>Movies</Text>
              </CardBody>
            </Card>
        </Link>
      </SimpleGrid>
    </Container>
  )
}

export default Home