import basic from '../assets/cards/basic web.png'
import advanced from '../assets/cards/advanced web.png'
import ui from '../assets/cards/ui.png'
import embeddedC from '../assets/cards/c.png'
import embedded from '../assets/cards/embedded.png'
import cpp from '../assets/cards/c++.png'
import mobile from '../assets/cards/mobile.png'
import qt from '../assets/cards/qt.png'
import ai from '../assets/cards/ai.png'
import digital from '../assets/cards/digital.png'
import analog from '../assets/cards/analog.png'
import hr from '../assets/cards/hr.png'
import pr from '../assets/cards/pr.png'
import fr from '../assets/cards/fr.png'
import media from '../assets/cards/media.png'
import pm from '../assets/cards/pm.png'

const iconsObject = {
    "Basic Web": basic,
    "Advanced Web": advanced,
    "UX & UI Design": ui,
    "Embedded C": embeddedC,
    "AVR": embedded,
    "ARM": embedded,
    "C++": cpp,
    "Mobile": mobile,
    "QT": qt,
    "AI": ai,
    "Digital IC": digital,
    "Analog IC": analog,
    "HR": hr,
    "PR": pr,
    "Fundraising": fr,
    "Media": media,
    "PM": pm,
}

export function getCommitteeIcon(committeeName) {
    return iconsObject[committeeName];
}