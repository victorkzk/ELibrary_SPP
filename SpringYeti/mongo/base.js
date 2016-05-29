/* 1 */
var books = [
    {
        "_id": ObjectId("56f6ab4bcf4112fb32d162d8"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "The Life We Bury",
        "author": "Allen Eskens",
        "type": "Paper",
        "description": "College student Joe Talbert has the modest goal of completing a writing assignment for an English class. His task is to interview a stranger and write a brief biography of the person. With deadlines looming, Joe heads to a nearby nursing home to find a willing subject. There he meets Carl Iverson, and soon nothing in Joe's life is ever the same.",
        "rating": 3,
        "date": "October 14, 2014",
        "imageSrc": "http://ecx.images-amazon.com/images/I/61KaCYPW28L.jpg"
    },

    /* 2 */
    {
        "_id": ObjectId("56f6ad43cf4112fb32d162d9"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "The Goldfinch",
        "author": "Donna Tartt",
        "type": "PDF",
        "description": "Theo Decker, a 13-year-old New Yorker, miraculously survives an accident that kills his mother. Abandoned by his father, Theo is taken in by the family of a wealthy friend. Bewildered by his strange new home on Park Avenue, disturbed by schoolmates who don't know how to talk to him, and tormented above all by his longing for his mother, he clings to the one thing that reminds him of her: a small, mysteriously captivating painting that ultimately draws Theo into the underworld of art.",
        "rating": 3,
        "date": "April 7, 2015",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51mUY8Y2-ZL.jpg"
    },

    /* 3 */
    {
        "_id": ObjectId("56f6adb0cf4112fb32d162da"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "Yellow Crocus",
        "author": "Laila Ibrahim",
        "type": "ERUB",
        "description": "Moments after Lisbeth is born, she’s taken from her mother and handed over to an enslaved wet nurse, Mattie, a young mother separated from her own infant son in order to care for her tiny charge. Thus begins an intense relationship that will shape both of their lives for decades to come. Though Lisbeth leads a life of privilege, she finds nothing but loneliness in the company of her overwhelmed mother and her distant, slave-owning father. As she grows older, Mattie becomes more like family to Lisbeth than her own kin and the girl’s visits to the slaves’ quarters—and their lively and loving community—bring them closer together than ever. But can two women in such disparate circumstances form a bond like theirs without consequence? This deeply moving tale of unlikely love traces the journey of these very different women as each searches for freedom and dignity.",
        "rating": 3,
        "date": "August 19, 2014",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51ldN8hTuQL.jpg"
    },

    /* 4 */
    {
        "_id": ObjectId("56f6be68cf4112fb32d162db"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "All the Light We Cannot See",
        "author": "Anthony Doerr",
        "type": "PDF",
        "description": "From the highly acclaimed, multiple award-winning Anthony Doerr, the beautiful, stunningly ambitious instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II. Marie-Laure lives with her father in Paris near the Museum of Natural History, where he works as the master of its thousands of locks. When she is six, Marie-Laure goes blind and her father builds a perfect miniature of their neighborhood so she can memorize it by touch and navigate her way home. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure’s reclusive great-uncle lives in a tall house by the sea. With them they carry what might be the museum’s most valuable and dangerous jewel.",
        "rating": 3,
        "date": "October 12, 2007",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51MfO0a70ZL.jpg"
    },

    /* 5 */
    {
        "_id": ObjectId("56f6bec5cf4112fb32d162dc"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "Everything I Never Told You",
        "author": "Celeste Ng",
        "type": "PDF",
        "description": "“Lydia is dead. But they don’t know this yet.” So begins this exquisite novel about a Chinese American family living in 1970s small-town Ohio. Lydia is the favorite child of Marilyn and James Lee, and her parents are determined that she will fulfill the dreams they were unable to pursue. But when Lydia’s body is found in the local lake, the delicate balancing act that has been keeping the Lee family together is destroyed, tumbling them into chaos. A profoundly moving story of family, secrets, and longing, Everything I Never Told You is both a gripping page-turner and a sensitive family portrait, uncovering the ways in which mothers and daughters, fathers and sons, and husbands and wives struggle, all their lives, to understand one another.",
        "rating": 3,
        "date": "May 12, 2015",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51pPrXUd%2B7L.jpg"
    },

    /* 6 */
    {
        "_id": ObjectId("56f6bf4bcf4112fb32d162dd"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "What She Left Behind",
        "author": "Ellen Marie Wiseman",
        "type": "PDF",
        "description": "In this stunning new novel, the acclaimed author of The Plum Tree merges the past and present into a haunting story about the nature of love and loyalty--and the lengths we will go to protect those who need us most. Ten years ago, Izzy Stone's mother fatally shot her father while he slept. Devastated by her mother's apparent insanity, Izzy, now seventeen, refuses to visit her in prison. But her new foster parents, employees at the local museum, have enlisted Izzy's help in cataloging items at a long-shuttered state asylum. There, amid piles of abandoned belongings, Izzy discovers a stack of unopened letters, a decades-old journal, and a window into her own past. ",
        "rating": 3,
        "date": "December 31, 2013",
        "imageSrc": "http://ecx.images-amazon.com/images/I/61bLHO4EiEL.jpg"
    },

    /* 7 */
    {
        "_id": ObjectId("56f6bff1cf4112fb32d162de"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "A Walk in the Rain",
        "author": "Vivian Sinclair",
        "type": "PDF",
        "description": "In this women’s fiction contemporary novel, set in the rainy, beautiful Pacific Northwest, the lives of four women blend in an unexpected way, as they help each other to get through difficult moments. It all starts with the mysterious disappearance of Miranda Henderson’s two valuable art objects, a Chihuli glass bowl and an abstract painting. Miranda Henderson lives almost like a recluse after the death of her daughter Cassidy and husband Bob, trying to cope with life alone, when a chain of events changes her monotonous everyday life. ",
        "rating": 3,
        "date": "December 14, 2001",
        "imageSrc": "http://ecx.images-amazon.com/images/I/618JC-Bcn4L.jpg"
    },

    /* 8 */
    {
        "_id": ObjectId("56f6c056cf4112fb32d162df"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "The Orphan Master's Son",
        "author": "Adam Johnson",
        "type": "Paper",
        "description": "In this epic, critically acclaimed tour de force, Adam Johnson provides a riveting portrait of a world rife with hunger, corruption, and casual cruelty but also camaraderie, stolen moments of beauty, and love.",
        "rating": 4,
        "date": "August 7, 2012",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51EQHor4tJL.jpg"
    },

    /* 9 */
    {
        "_id": ObjectId("56f6c0c5cf4112fb32d162e0"),
        "_class": "com.antonchernov.yetilibrary.rest.model.Book",
        "title": "Secrets She Kept",
        "author": "Cathy Gohlke",
        "type": "Paper",
        "description": "All her life, Hannah Sterling longed for a close relationship with her estranged mother. Following Lieselotte’s death, Hannah determines to unlock the secrets of her mother’s mysterious past and is shocked to discover a grandfather living in Germany. Thirty years earlier, Lieselotte’s father is quickly ascending the ranks of the Nazi party, and a proper marriage for his daughter could help advance his career. Lieselotte is in love―but her beloved Lukas is far from an ideal match, as he secretly works against the Reich. Yet Lieselotte never imagined how far her father would go to ensure her cooperation.",
        "rating": 4,
        "date": "September 1, 2015",
        "imageSrc": "http://ecx.images-amazon.com/images/I/51xzbYMMWfL.jpg"
    }];

var accounts = [
    /* 1 */
    {
        "_id" : ObjectId("56f69e91ed68407a5fa4cd6d"),
        "_class" : "com.antonchernov.yetilibrary.rest.model.Account",
        "username" : "admin",
        "password" : "admin",
        "roles" : [
            {
                "role" : "ROLE_ADMIN"
            }
        ]
    },

    /* 2 */
    {
        "_id" : ObjectId("56f69ed0cf4112fb32d162d7"),
        "_class" : "com.antonchernov.yetilibrary.rest.model.Account",
        "username" : "user",
        "password" : "user",
        "roles" : [
            {
                "role" : "ROLE_USER"
            }
        ]
    }
];