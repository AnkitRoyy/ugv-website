import ananyaImg from "../assets/team/ananya.jpg";
import ankitImg from "../assets/team/ankit.jpeg";
import ayushImg from "../assets/team/ayush.jpg";
import dakshImg from "../assets/team/daksh.jpg";
import harshitTyagiImg from "../assets/team/harshit_tyagi.jpg";
import lakshyaImg from "../assets/team/lakshya.jpeg";
import manaanImg from "../assets/team/manaan.jpg";
import narayanImg from "../assets/team/narayan.jpeg";
import prakharImg from "../assets/team/prakhar.jpg";
import rishikantImg from "../assets/team/rishikant.jpeg";
import sanchitImg from "../assets/team/sanchit.jpg";
import naharImg from "../assets/team/nahar.jpeg";

// Electrical Member Images
import unnatKrishnaImg from "../assets/team/unnat_krishna.jpeg";
import anmolBhardwajImg from "../assets/team/anmol_bhardwaj.png";
import pranjalGuptaImg from "../assets/team/pranjal_gupta.png";
import bhavyaJindalImg from "../assets/team/bhavya_jindal.png";
import dhairyaAnejaImg from "../assets/team/dhairya_aneja.jpeg";
import tanishqKhandelwalImg from "../assets/team/tanishq_khandelwal.jpeg";
import dhruvRastogiImg from "../assets/team/dhruv_rastogi.jpeg";
import aryanMunjalImg from "../assets/team/aryan_munjal.jpeg";
import lakshayaVermaImg from "../assets/team/lakshaya_verma.jpeg";
import syedWaliMehdiImg from "../assets/team/syed_wali_mehdi.jpeg";
import priyanshuGrewalImg from "../assets/team/priyanshu_grewal.jpeg";
import saubhagyaJaiswalImg from "../assets/team/saubhagya_jaiswal.jpeg";

// Mechanical Member Images
import mohdShahnawazImg from "../assets/team/mohd_shahnawaz.jpeg";
import riaSolankiImg from "../assets/team/ria_solanki.jpeg";
import manishKumarImg from "../assets/team/manish_kumar.jpeg";
import ashishBhattImg from "../assets/team/ashish_bhatt.jpeg";
import himanshuPrajapatiImg from "../assets/team/himanshu_prajapati.jpeg";
import abhinavAgarwalImg from "../assets/team/abhinav_agarwal.jpeg";
import sameerTandonImg from "../assets/team/sameer_tandon.jpeg";
import sbNarayananImg from "../assets/team/sb_narayanan.jpeg";
import aayushKumarMechImg from "../assets/team/aayush_kumar_mech.jpeg";
import shreshtaSrivastavaImg from "../assets/team/shreshta_srivastava.jpeg";
import aarnavKansalImg from "../assets/team/aarnav_kansal.jpeg";
import ishaanYadavImg from "../assets/team/ishaan_yadav.jpeg";

// Research and Outreach Member Images
import tanishqKhannaImg from "../assets/team/tanishq_khanna.jpeg";
import priyanshuSinghImg from "../assets/team/priyanshu_singh.jpeg";
import ayushmanBandyopadhyayImg from "../assets/team/ayushman_bandyopadhyay.jpeg";
import piyushImg from "../assets/team/piyush.png";

// Software Member Images
import bhanupriyaImg from "../assets/team/bhanupriya.jpeg";
import himanshuKumarSinghImg from "../assets/team/himanshu_kumar_singh.jpeg";
import preetBislaImg from "../assets/team/preet_bisla.jpeg";
import anshDahiyaImg from "../assets/team/ansh_dahiya.jpeg";
import akashSheejithImg from "../assets/team/akash_sheejith.jpeg";
import peeyushRajBansalImg from "../assets/team/peeyush_raj_bansal.jpeg";
import himanshuBaghelImg from "../assets/team/himanshu_baghel.jpeg";
import anujKumarYadavImg from "../assets/team/anuj_kumar_yadav.jpeg";
import preshthaBajajImg from "../assets/team/preshtha_bajaj.jpeg";
import pranavMaheshwariImg from "../assets/team/pranav_maheshwari.jpeg";
import soumyeChauhanImg from "../assets/team/soumye_chauhan.jpeg";
import tusharImg from "../assets/team/tushar.png";
import neevKumarImg from "../assets/team/neev_kumar.jpeg";
import harshitImg from "../assets/team/harshit.jpeg";
import arpitImg from "../assets/team/arpit.jpeg";
import adityaKumarImg from "../assets/team/aditya_kumar.png";
import omiShouryaImg from "../assets/team/omi_shourya.jpeg";
import bhavyaGargImg from "../assets/team/bhavya_garg.jpeg";
import laxmanBhusalImg from "../assets/team/laxman_bhusal.jpeg";
import avinashKhalkhoImg from "../assets/team/avinash_khalkho.jpeg";
import saurabhKumarImg from "../assets/team/saurabh_kumar.jpeg";

const sortMembers = (members) =>
  members.sort((firstMember, secondMember) => {
    if (firstMember.name === "Avinash Khalkho") return -1;
    if (secondMember.name === "Avinash Khalkho") return 1;
    return firstMember.name.localeCompare(secondMember.name);
  });

export const COUNCIL = [
  {
    name: "Narayan Mishra",
    role: "Captain",
    image: narayanImg,
    github: "https://github.com/nrynmish",
    instagram: "https://www.instagram.com/narayxn_m",
    linkedin: "https://www.linkedin.com/in/nrynmish",
  },
  {
    name: "Daksh Panchal",
    role: "Vice-Captain",
    image: dakshImg,
    github: "https://github.com/dakshhpanchal",
    instagram: "https://www.instagram.com/dakshh.panchal",
    linkedin: "https://www.linkedin.com/in/dakshhpanchal",
  },
  {
    name: "Manaan Tyagi",
    role: "Team Manager",
    image: manaanImg,
    instagram: "https://www.instagram.com/tyagimanaan",
    linkedin: "https://www.linkedin.com/in/manaantyagi/",
  },
  {
    name: "Lakshya Jindal",
    role: "Treasurer",
    image: lakshyaImg,
    github: "https://github.com/lakshya1907",
    instagram: "https://www.instagram.com/_lakshyajindal_/",
    linkedin: "https://www.linkedin.com/in/lakshya-jindal-46946b27b/",
  },
  {
    name: "Harshit Tyagi",
    role: "R&D Director",
    image: harshitTyagiImg,
    instagram: "https://www.instagram.com/harshittyagi333/",
    linkedin: "https://www.linkedin.com/in/harshit-tyagi-1aa705323/",
  },

  {
    name: "Ananya Tripathi",
    role: "R&D Co-Head",
    image: ananyaImg,
    instagram: "https://www.instagram.com/anan.yaaa__/",
    linkedin: "https://www.linkedin.com/in/ananya-tripathi-733407330",
  },
  {
    name: "Ankit Kumar Roy",
    role: "Software Head",
    image: ankitImg,
    github: "https://github.com/AnkitRoyy",
    instagram: "https://www.instagram.com/ankitttroy",
    linkedin: "https://www.linkedin.com/in/ankit-roy1",
  },
  {
    name: "Sanchit Kumar",
    role: "Electrical Head",
    image: sanchitImg,
    instagram: "https://www.instagram.com/birasari_541_official",
    linkedin: "https://www.linkedin.com/in/sanchit-kumar-79254338a",
  },
  {
    name: "Nahar Singh",
    role: "Mechanical Head (Manufacturing)",
    image: naharImg,
    instagram: "https://www.instagram.com/nsingh_2541/",
    linkedin: "https://www.linkedin.com/in/nahar-singh-43878736b/",
  },
  {
    name: "Prakhar Mishra",
    role: "Mechanical Head (Design)",
    image: prakharImg,
    instagram: "https://www.instagram.com/prakhar_mishra.01/",
    linkedin: "https://www.linkedin.com/in/prakhar-mishra-a32982214/",
  },
  {
    name: "Rishikant",
    role: "Software Co-Head",
    image: rishikantImg,
    github: "https://github.com/Rishiii2",
    instagram: "https://www.instagram.com/it.is.rishii",
    linkedin: "https://www.linkedin.com/in/rishikant-4b5334369",
  },
  {
      name: "Avinash Khalkho",
      role: "Software Co-Head",
      image: avinashKhalkhoImg,
      github: "https://github.com/w1dow",
      linkedin: "https://www.linkedin.com/in/avinash-khalkho-19069527a/",
      instagram: "https://www.instagram.com/_avinash__1306/",
  },
  {
    name: "Ayush Kumar",
    role: "Electrical Co-Head",
    image: ayushImg,
    instagram: "https://www.instagram.com/_.ayush2134",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-403741381",
  },
];

export const DEPARTMENTS = {
  Software: sortMembers([
    {
      name: "Bhanupriya",
      role: "Member",
      image: bhanupriyaImg,
      github: "https://github.com/Bhanupriiya",
      instagram: "https://www.instagram.com/toothleezz",
      linkedin: "https://www.linkedin.com/in/bhanupriya-920216434",
    },
    {
      name: "Himanshu Kumar Singh",
      role: "Member",
      image: himanshuKumarSinghImg,
      github: "https://github.com/Himanshu26A17005",
      instagram: "https://www.instagram.com/himanshuisalive._",
      linkedin: "https://www.linkedin.com/in/himanshu-somvanshi-0b305a364",
    },
    {
      name: "Preet Bisla",
      role: "Member",
      image: preetBislaImg,
      github: "https://github.com/kavishusesthis",
      instagram: "https://www.instagram.com/kaviscx",
      linkedin: "https://www.linkedin.com/in/preet-bisla-24b875441"
    },
    {
      name: "Akash Sheejith",
      role: "Member",
      image: akashSheejithImg,
      github: "https://github.com/chickenbroth274-dev",
      instagram: "https://www.instagram.com/guitarwala_akash",
      linkedin: "#",
    },
    {
      name: "Peeyush Raj Bansal",
      role: "Member",
      image: peeyushRajBansalImg,
      github: "https://github.com/peeyush1102",
      instagram: "https://www.instagram.com/peeyush_rb/",
      linkedin: "https://www.linkedin.com/in/peeyush-raj-bansal-638338368/",
    },
    {
      name: "Himanshu Baghel",
      role: "Member",
      image: himanshuBaghelImg,
      github: "https://github.com/himanshubaghel9900",
      instagram: "https://www.instagram.com/himanshu_baghel_167",
      linkedin: "https://www.linkedin.com/in/himanshu-baghel-3a633b370",
    },
    {
      name: "Anuj Kumar Yadav",
      role: "Member",
      image: anujKumarYadavImg,
      github: "https://github.com/ahiranuj",
      instagram: "https://www.instagram.com/yadavanuj.m",
      linkedin: "https://www.linkedin.com/in/anuj-kumar-yadav-9a4bbb423",
    },
    {
      name: "Preshtha Bajaj",
      role: "Member",
      image: preshthaBajajImg,
      github: "https://github.com/preshtha13",
      instagram: "https://www.instagram.com/preshtha__/",
      linkedin: "https://www.linkedin.com/in/preshtha-bajaj-a81bb4411/",
    },
    {
      name: "Pranav Maheshwari",
      role: "Member",
      image: pranavMaheshwariImg,
      github: "https://github.com/pranavmaheshwari15",
      instagram: "https://www.instagram.com/prnv_1558/",
      linkedin: "https://www.linkedin.com/in/pranav-maheshwari-54a413428/",
    },
    {
      name: "Soumye Chauhan",
      role: "Member",
      image: soumyeChauhanImg,
      github: "https://github.com/SoumyeChauhan26B3039/Soumye-Chauhan-26-B3-39.git",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/soumye-chauhan-1597a3434",
    },
    {
      name: "Tushar",
      role: "Member",
      image: tusharImg,
      github: "https://github.com/devbytush",
      instagram: "https://www.instagram.com/devbytush/",
      linkedin: "#",
    },
    {
      name: "Neev Kumar",
      role: "Member",
      image: neevKumarImg,
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Harshit",
      role: "Member",
      image: harshitImg,
      github: "https://github.com/harshitmp4/",
      instagram: "https://www.instagram.com/harshitpostinggg/",
    },
    
  ]),
  Electrical: sortMembers([
    {
      name: "Unnat Krishna",
      role: "Member",
      image: unnatKrishnaImg,
      github: "https://github.com/Unnat007",
      instagram: "https://www.instagram.com/krishna_unnat7",
      linkedin: "https://www.linkedin.com/in/unnat-krishna-a12a5823b/",
    },
    {
      name: "Anmol Krishna Bhardwaj",
      role: "Member",
      image: anmolBhardwajImg,
      instagram: "https://www.instagram.com/anmol_krishnab",
      linkedin: "https://www.linkedin.com/in/anmol-krishna-bhardwaj-904442379",
    },
    {
      name: "Pranjal Gupta",
      role: "Member",
      image: pranjalGuptaImg,
      instagram: "https://www.instagram.com/im_pranjalg",
      linkedin: "https://www.linkedin.com/in/pranjalgupta12/",
    },
    {
      name: "Bhavya Jindal",
      role: "Member",
      image: bhavyaJindalImg,
      instagram: "https://www.instagram.com/jindal._.bhavya",
      linkedin: "#",
    },
    {
      name: "Tanishq Khandelwal",
      role: "Member",
      image: tanishqKhandelwalImg,
      github: "https://github.com/tanishqgiant",
      instagram: "https://www.instagram.com/tanishq_k05",
      linkedin: "https://www.linkedin.com/in/tanishq-khandelwal-9304b2434/",
    },
    {
      name: "Lakshaya Verma",
      role: "Member",
      image: lakshayaVermaImg,
      instagram: "https://www.instagram.com/Lakshayavermaa",
      linkedin: "https://www.linkedin.com/in/lakshaya-verma-ab044931b",
    },
    {
      name: "Syed Wali Mehdi",
      role: "Member",
      image: syedWaliMehdiImg,
      github: "https://github.com/walipng/Syed-Wali-Mehdi---26-A19-029.git",
      instagram: "https://www.instagram.com/shoegaysglazer",
      linkedin: "https://www.linkedin.com/in/syed-wali-mehdi-947167422",
    },
    {
      name: "Priyanshu",
      role: "Member",
      image: priyanshuGrewalImg,
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/priyanshu-grewal-029505377",
    },
    {
      name: "Saubhagya Jaiswal",
      role: "Member",
      image: saubhagyaJaiswalImg,
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/saubhagya-jaiswal-25a138413",
    },
    {
      name: "Arpit",
      role: "Member",
      image: arpitImg,
      linkedin: "https://www.linkedin.com/in/arpit-arpit-b3153842a/",
    },
    {
      name: "Aditya Kumar",
      role: "Member",
      image: adityaKumarImg,
      github: "https://github.com/TheNotoriousKnight",
      linkedin: "https://www.linkedin.com/in/adityakumar2026/",
    },
    {
      name: "Omi Shourya",
      role: "Member",
      image: omiShouryaImg,
      github: "https://github.com/pippo1907",
      linkedin: "https://www.linkedin.com/in/omi-shourya-4b8a6b302",
      instagram: "https://www.instagram.com/Astro_omi/",
    },
  ]),
  Mechanical: sortMembers([
    {
      name: "Mohd Shahnawaz",
      role: "Member",
      image: mohdShahnawazImg,
      instagram: "https://www.instagram.com/hye.shan_",
      linkedin: "https://www.linkedin.com/in/mohd-shahnawaz-4b0a4442b",
    },
    {
      name: "Manish Kumar",
      role: "Member",
      image: manishKumarImg,
      instagram: "https://www.instagram.com/nxt_manis",
      linkedin: "#",
    },
    {
      name: "Ashish P. Bhatt",
      role: "Member",
      image: ashishBhattImg,
      github: "https://github.com/nottodayas2024-arch",
      instagram: "https://www.instagram.com/iamjustashishboi",
      linkedin: "https://www.linkedin.com/in/ashish-pbhatt-427345427",
    },
    {
      name: "Sameer Tandon",
      role: "Member",
      image: sameerTandonImg,
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "S B Narayanan",
      role: "Member",
      image: sbNarayananImg,
      instagram: "https://www.instagram.com/_sbn_thatsme",
      linkedin: "https://www.linkedin.com/in/narayanan-s-b-179456434/",
    },
    {
      name: "Aayush Kumar",
      role: "Member",
      image: aayushKumarMechImg,
      github: "https://github.com/AayushKumar-007",
      instagram: "https://www.instagram.com/aayush.uniwork",
      linkedin: "https://www.linkedin.com/in/aayush-kumar-93a539434",
    },
    {
      name: "Shreshta Srivastava",
      role: "Member",
      image: shreshtaSrivastavaImg,
      instagram: "https://www.instagram.com/shreshta.srivastava/",
      linkedin: "https://www.linkedin.com/in/shreshta-srivastava-03819b427/",
    },
    {
      name: "Aarnav Kansal",
      role: "Member",
      image: aarnavKansalImg,
      instagram: "https://www.instagram.com/theredhairbilla",
      linkedin: "https://www.linkedin.com/in/aarnav-kansal-374399425",
    },
  ]),
  "Research and Outreach": sortMembers([
    {
      name: "Tanishq Khanna",
      role: "Member",
      image: tanishqKhannaImg,
      instagram: "https://www.instagram.com/tanniisshhq",
      linkedin: "https://www.linkedin.com/in/tanishq-khanna-3b3876365",
    },
    {
      name: "Priyanshu Singh",
      role: "Member",
      image: priyanshuSinghImg,
      instagram: "https://www.instagram.com/priyyanshu.27",
      linkedin: "https://www.linkedin.com/in/priyanshu-singh-288480434",
    },
    {
      name: "Ayushman Bandyopadhyay",
      role: "Member",
      image: ayushmanBandyopadhyayImg,
      instagram: "https://www.instagram.com/thetypicalduelist",
      linkedin: "https://www.linkedin.com/in/ayushman-banerjee-07551640b",
    },
    {
      name: "Piyush",
      role: "Member",
      image: piyushImg,
      github: "https://github.com/codebypiyush-io",
      instagram: "https://www.instagram.com/only.ppiiyush",
      linkedin: "https://www.linkedin.com/in/piyush-450ba33b6",
    },
    {
      name: "Saurabh Kumar",
      role: "Member",
      image: saurabhKumarImg,
    },
  ]),
};
