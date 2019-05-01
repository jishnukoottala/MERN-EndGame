const router = require('express').Router()
const Character = require('../modals/Character')

/**
 * URL: localhost:5001/api/Characters/
 * Response: Array of all Character documents
 */
router.get('/', (req, res, next) => {
  Character.find({}, (err, Characters) => {
    if (err) next(err)
    else res.json(Characters)
  })
})

/**
 * URL: localhost:5001/api/Characters/seed
 * Description: Used to give database some test data.
 */
router.post('/seed', async (req, res, next) => {
  for (let x = 0; x < 5; x++) {
    const newCharacter = new Character({
      character: `This is Character ${Math.random().toFixed(5)}`,
      dateCreated: new Date()
    })
    await newCharacter.save()
  }
  res.send(
    'Lets run the GET after this to see if the Characters got seeded successfully  '
  )
})

/**
 * URL: localhost:5001/api/Characters/create
 * Response: Newly created Character object if successful
 */

router.post('/create', (req, res, next) => {
  const { character } = req.body

  // console.log('request body - ', req.body)
  const newCharacter = new Character({
    character,
    dateCreated: new Date()
  })
  // console.log('--- newCharacter -- ', newCharacter)
  newCharacter.save(err => {
    if (err) next(err)
    else res.json({ newCharacter, msg: 'Character successfully saved!' })
  })
})

/**
 * URL: localhost:5001/api/Characters/
 * Description: Deletes all Characters from DB
 */
router.delete('/', (req, res, next) => {
  Character.deleteMany({}, err => {
    if (err) next(err)
    else res.send('Successfully deleted all Characters')
  })
})

module.exports = router
