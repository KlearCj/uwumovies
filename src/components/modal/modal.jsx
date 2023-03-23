import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
  } from '@chakra-ui/react'
  import {InfoIcon, StarIcon} from '@chakra-ui/icons'
  const baseUrl = "https://image.tmdb.org/t/p/original"


function Modalito({movie}) {
  console.log(movie)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <IconButton pos="absolute" top='5%' right='6%' onClick={onOpen} icon={<InfoIcon/>} size='lg'/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor='#121212'>
            <ModalHeader>{movie.title || movie.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <img src={`${baseUrl}${movie.backdrop_path}`} alt={movie.id} />
            {movie.overview}
            </ModalBody>
            <ModalFooter justifyContent={'space-between'}>
              <h5><StarIcon/> {movie.vote_average}</h5>
              <Button variant='ghost'>holu</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default Modalito