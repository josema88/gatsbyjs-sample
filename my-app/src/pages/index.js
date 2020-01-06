import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Movie from "../components/movie"

const movie = {
  title: "Star Wars: The Rise of Skywalker",
  genre: "Action, Sci-fi",
  trailer: "14EztMXh5vQ",
  image: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Movie data={movie}></Movie>
  </Layout>
)

export default IndexPage
