/*
CARBONVERSE QUESTION BANK
------------------------------------------------------------
EDITING:
1. Open this file in your GitHub repository.
2. Change the question/answer text inside the arrays below.
3. Keep the quotation marks, commas and brackets.
4. Commit the change.
The QR codes do NOT need to be changed when you edit questions.
Each station has 10 different questions/tasks.
*/

const BUILD_QUESTIONS = [
 {question:"Construct methane (CH₄) using the carbon and hydrogen pieces.",answer:"Use 1 carbon atom. Attach 4 hydrogen atoms around it to satisfy carbon's tetravalency. Methane is a saturated hydrocarbon."},
 {question:"Construct ethane (C₂H₆). Show the type of bond between the carbon atoms.",answer:"Join 2 carbon atoms with one C–C single bond. Add 6 hydrogen atoms in total to complete tetravalency. Ethane is an alkane."},
 {question:"Construct ethene (C₂H₄). What must change compared with ethane?",answer:"Join 2 carbon atoms with a C=C double bond and add 4 hydrogen atoms. Ethene is an unsaturated alkene."},
 {question:"Construct ethyne (C₂H₂). Show the multiple bond clearly.",answer:"Join 2 carbon atoms with a C≡C triple bond and add 2 hydrogen atoms. Ethyne is an unsaturated alkyne."},
 {question:"Construct propane (C₃H₈) as a straight-chain compound.",answer:"Arrange 3 carbon atoms in a straight chain with C–C single bonds, then add 8 hydrogen atoms to satisfy tetravalency."},
 {question:"Construct propene (C₃H₆) and place the double bond at the end of the chain.",answer:"Arrange 3 carbons and make one terminal C=C bond: CH₂=CH–CH₃. Complete the remaining valencies with hydrogen."},
 {question:"Construct propyne (C₃H₄) and show the triple bond at the end.",answer:"Arrange 3 carbons and make one terminal C≡C bond: HC≡C–CH₃. Complete the remaining valencies with hydrogen."},
 {question:"Construct ethanol (C₂H₅OH). Identify the functional group.",answer:"Make a 2-carbon chain and attach –OH to the terminal carbon: CH₃–CH₂–OH. The functional group is hydroxyl (–OH)."},
 {question:"Construct ethanoic acid (CH₃COOH). Identify the functional group.",answer:"Make CH₃–COOH. The functional group is carboxyl (–COOH)."},
 {question:"Build a 3-carbon compound containing a C=C bond and an –OH group. Suggest a valid structure.",answer:"One valid example is prop-2-en-1-ol (CH₂=CH–CH₂–OH). Build 3 carbons, one double bond and one hydroxyl group while satisfying carbon valencies."}
];

const NAME_QUESTIONS = [
 {question:"Name: CH₄",answer:"methane",reason:"One carbon with only single bonds gives the alkane name methane."},
 {question:"Name: CH₃–CH₃",answer:"ethane",reason:"Two carbons form the parent ethane; all C–C bonds are single."},
 {question:"Name: CH₃–CH₂–CH₃",answer:"propane",reason:"Three carbons in a saturated chain give propane."},
 {question:"Name: CH₂=CH₂",answer:"ethene",reason:"Two carbons with a C=C double bond use the –ene ending."},
 {question:"Name: CH≡CH",answer:"ethyne",reason:"Two carbons with a C≡C triple bond use the –yne ending."},
 {question:"Name: CH₃–CH₂–OH",answer:"ethanol",reason:"Two carbons give the ethane parent; –OH gives the alcohol suffix –ol."},
 {question:"Name: CH₃–CH₂–CH₂–OH",answer:"propan-1-ol",reason:"Three carbons give propane; number from the OH end, giving propan-1-ol."},
 {question:"Name: CH₃–COOH",answer:"ethanoic acid",reason:"Two carbons with –COOH give the carboxylic acid name ethanoic acid."},
 {question:"Name: CH₃–CH₂–CHO",answer:"propanal",reason:"Three carbons with terminal –CHO give the aldehyde name propanal."},
 {question:"Name: CH₃–CO–CH₃",answer:"propanone",reason:"Three carbons with a ketone group give propanone; the carbonyl is on the middle carbon."}
];

const CHALLENGE_QUESTIONS = [
 {question:"Which property allows carbon atoms to form long chains and rings?",options:["Tetravalency","Catenation","Combustion","Neutralisation"],answer:1,explanation:"Catenation is carbon's ability to bond with other carbon atoms and form chains, branches and rings."},
 {question:"Which bond is present in a saturated hydrocarbon?",options:["Only single C–C bonds","At least one C=C bond","At least one C≡C bond","Only C=O bonds"],answer:0,explanation:"Saturated hydrocarbons contain only single carbon-carbon bonds."},
 {question:"What does the suffix –ene generally indicate in a hydrocarbon name?",options:["Alcohol group","C=C double bond","C≡C triple bond","Carboxylic acid"],answer:1,explanation:"The –ene ending indicates a carbon-carbon double bond."},
 {question:"What does the suffix –yne generally indicate?",options:["C–C single bond","C=C double bond","C≡C triple bond","–OH group"],answer:2,explanation:"The –yne ending indicates a carbon-carbon triple bond."},
 {question:"Which pair belongs to the same homologous series?",options:["Methane and ethane","Ethane and ethanol","Ethene and ethanol","Ethanoic acid and ethyne"],answer:0,explanation:"Methane and ethane are consecutive members of the alkane homologous series and differ by CH₂."},
 {question:"What is the molecular formula of propane?",options:["C₂H₆","C₃H₆","C₃H₈","C₄H₈"],answer:2,explanation:"Propane is an alkane, so for three carbons CₙH₂ₙ₊₂ gives C₃H₈."},
 {question:"Which functional group is present in ethanol?",options:["–COOH","–CHO","–OH","–CO–"],answer:2,explanation:"Ethanol contains the hydroxyl group –OH."},
 {question:"Why can C₄H₁₀ have more than one structural formula?",options:["It has different elements","Carbon can form different arrangements of the same atoms","Its molecular formula changes","Hydrogen becomes a different element"],answer:1,explanation:"The same molecular formula can have different carbon arrangements, producing structural isomers."},
 {question:"Which compound is an alkyne?",options:["C₂H₆","C₂H₄","C₂H₂","CH₄"],answer:2,explanation:"C₂H₂ is ethyne and contains a C≡C triple bond."},
 {question:"Which statement about a homologous series is correct?",options:["Every member has a completely different functional group","Successive members differ by –CH₂–","All members have the same molecular formula","Members have different carbon atoms but no pattern"],answer:1,explanation:"Consecutive members of a homologous series differ by a –CH₂– unit and show similar chemical properties."}
];

const ISOMER_QUESTIONS = [
 {question:"How many structural isomers does C₄H₁₀ have?",answer:"2",accept:["2","two"],explanation:"C₄H₁₀ has two structural isomers: butane and 2-methylpropane."},
 {question:"How many structural isomers does C₅H₁₂ have?",answer:"3",accept:["3","three"],explanation:"C₅H₁₂ has three structural isomers."},
 {question:"Are CH₃–CH₂–CH₂–CH₃ and CH₃–CH(CH₃)–CH₃ structural isomers?",answer:"yes",accept:["yes","yes, they are","yes they are"],explanation:"Both have molecular formula C₄H₁₀ but different structural arrangements."},
 {question:"Do structural isomers have the same molecular formula or different molecular formulae?",answer:"same molecular formula",accept:["same molecular formula","same","same formula"],explanation:"Structural isomers have the same molecular formula but different structural formulae."},
 {question:"How many structural isomers does C₃H₈ have?",answer:"1",accept:["1","one"],explanation:"Propane has only one possible carbon skeleton, so it has one structural form."},
 {question:"Can C₂H₆ show chain structural isomerism?",answer:"no",accept:["no","no, it cannot","no it cannot"],explanation:"With only two carbon atoms there is only one possible carbon chain."},
 {question:"Which formula is associated with three structural isomers: C₄H₁₀ or C₅H₁₂?",answer:"C₅H₁₂",accept:["c5h12","c₅h₁₂","c5h12 has three"],explanation:"C₅H₁₂ has three structural isomers; C₄H₁₀ has two."},
 {question:"What must be different in structural isomers?",answer:"structural arrangement",accept:["structural arrangement","structure","structural formula","structural arrangement of atoms"],explanation:"The molecular formula stays the same, while the way atoms are connected differs."},
 {question:"Which pair is a structural-isomer pair: C₄H₁₀ forms or CH₄ and C₂H₆?",answer:"C₄H₁₀ forms",accept:["c4h10 forms","c4h10","c₄h₁₀ forms"],explanation:"The two C₄H₁₀ structures have the same molecular formula but different connectivity."},
 {question:"For C₅H₁₂, what kind of variation produces its structural isomers?",answer:"different carbon-chain arrangements",accept:["different carbon-chain arrangements","different carbon chain arrangements","different chain arrangements","different carbon skeletons"],explanation:"The carbon skeleton can be arranged in different ways while retaining C₅H₁₂."}
];

const CHECK_QUESTIONS = [
 {question:"Check this proposed name for CH₄: 'methane'.",answer:"methane",accept:["methane"],explanation:"Correct. One carbon in a saturated hydrocarbon is methane."},
 {question:"Check this proposed name for CH₃–CH₃: 'ethane'.",answer:"ethane",accept:["ethane"],explanation:"Correct. Two carbons with a single bond form ethane."},
 {question:"Check this proposed name for CH₃–CH₂–CH₃: 'propane'.",answer:"propane",accept:["propane"],explanation:"Correct. Three carbons with only single bonds form propane."},
 {question:"Check this proposed name for CH₂=CH₂: 'ethene'.",answer:"ethene",accept:["ethene"],explanation:"Correct. The C=C double bond is indicated by –ene."},
 {question:"Check this proposed name for CH≡CH: 'ethyne'.",answer:"ethyne",accept:["ethyne"],explanation:"Correct. The C≡C triple bond is indicated by –yne."},
 {question:"Check this proposed name for CH₃–CH₂–OH: 'ethanol'.",answer:"ethanol",accept:["ethanol"],explanation:"Correct. Two carbons plus –OH gives ethanol."},
 {question:"Check this proposed name for CH₃–CH₂–CH₂–OH: 'propan-1-ol'.",answer:"propan-1-ol",accept:["propan-1-ol","1-propanol"],explanation:"Correct. Numbering starts from the end nearer the –OH group."},
 {question:"Check this proposed name for CH₃–COOH: 'ethanoic acid'.",answer:"ethanoic acid",accept:["ethanoic acid"],explanation:"Correct. The –COOH group gives the carboxylic acid name."},
 {question:"Check this proposed name for CH₃–CH₂–CHO: 'propanal'.",answer:"propanal",accept:["propanal"],explanation:"Correct. The terminal –CHO group gives the aldehyde suffix –al."},
 {question:"Check this proposed name for CH₃–CO–CH₃: 'propanone'.",answer:"propanone",accept:["propanone"],explanation:"Correct. The ketone group on a three-carbon chain gives propanone."}
];

const DOUBT_QUESTIONS = [
 "Why does carbon form such a large number of compounds?",
 "What is catenation? Give a simple example.",
 "Why is methane saturated?",
 "Why is ethene called an unsaturated hydrocarbon?",
 "What is the difference between a C=C bond and a C≡C bond?",
 "How does a homologous series differ from a random group of compounds?",
 "Why do structural isomers have the same molecular formula?",
 "How do I choose the parent chain while naming a carbon compound?",
 "Why does the numbering of a carbon chain matter in IUPAC nomenclature?",
 "How can I identify a functional group from a structural formula?"
];

const QUIZ_QUESTIONS = [
 {question:"Carbon's ability to bond with itself to form chains is called:",options:["Catenation","Ionisation","Neutralisation","Distillation"],answer:0,explanation:"Catenation is carbon's self-linking ability."},
 {question:"Which formula represents an alkene?",options:["C₂H₆","C₂H₄","C₂H₂","CH₄"],answer:1,explanation:"C₂H₄ is ethene and contains C=C."},
 {question:"Which formula represents an alkyne?",options:["C₂H₆","C₂H₄","C₂H₂","C₃H₈"],answer:2,explanation:"C₂H₂ is ethyne and contains C≡C."},
 {question:"Which functional group is present in ethanoic acid?",options:["–OH","–CHO","–COOH","–CO–"],answer:2,explanation:"Ethanoic acid contains the carboxyl group –COOH."},
 {question:"Consecutive members of a homologous series differ by:",options:["CH₄","CH₂","COOH","OH"],answer:1,explanation:"Successive homologues differ by one –CH₂– unit."},
 {question:"The molecular formula of ethane is:",options:["C₂H₂","C₂H₄","C₂H₆","CH₄"],answer:2,explanation:"Ethane is C₂H₆."},
 {question:"Which one is an alcohol?",options:["CH₃COOH","CH₃CH₂OH","CH₃CHO","CH₃COCH₃"],answer:1,explanation:"CH₃CH₂OH is ethanol and contains –OH."},
 {question:"Structural isomers have:",options:["Different molecular formulae only","Same molecular formula but different structures","Same structure but different elements","No carbon atoms"],answer:1,explanation:"That is the defining feature of structural isomerism."},
 {question:"The suffix used for a carbon-carbon triple bond is:",options:["–ane","–ene","–yne","–ol"],answer:2,explanation:"–yne indicates a triple bond."},
 {question:"Which is the correct IUPAC name for CH₃–CH₂–CH₃?",options:["ethane","propane","propene","propyne"],answer:1,explanation:"There are three carbon atoms and only single bonds: propane."}
];
