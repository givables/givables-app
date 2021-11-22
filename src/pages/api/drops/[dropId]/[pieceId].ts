
export default function handler(req, res) {
    const { dropId, pieceId } = req.query;
    res.status(200).json({
      id: "0",
      name: "Stretching at Dusk",
      image: "/assets/art/2.jpg",
      description: {
        text: "Stretching at Dusk is a still image from the animation Stretching at Dusk",
        date: "Circa January 2021",
        dimensions: "4000px x 3750px",
      },
      artist: {
        name: "Owen McCallum-Keeler",
        about:
          "OWEN MCCALLUM-KEELER IS A IS A RISD PAINTING MAJOR (C0 2023).THE GIVABLES RISD COLLECTION FEATURES WORK FROM CURRENT AND RECENTLY GRADUATED, UP AND COMING DESIGNERS OF VAR OUS MAJORS FROM THE RHODE IsLAND SCHO00L OF DESIGN (RISD). RISD ISA WORLD CLASS INSTITUTION, AND THE PREMIERE ART AND DESIGN SCHOOL OF THE UNITED STATES.",
        instagram: "https://www.instagram.com/owenmcckee/",
        website: "https://www.owenmccallumkeeler.com/",
      },
    });
}