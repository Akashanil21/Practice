
const csvData = "../files/panchayat.csv"

function checkDuplicatePanchayatCodes(csvData) {
    const lines = csvData.trim().split('\n');
    const panchayatCodeSet = new Set();
  
    for (let i = 1; i < lines.length; i++) {
      const columns = lines[i].split(',');
      const panchayatCode = columns[1].trim();

      console.log("panchayat code : ",panchayatCode);
  
      if (panchayatCodeSet.has(panchayatCode)) {
        return true; // Duplicate found
      }
  
      panchayatCodeSet.add(panchayatCode);
    }
  
    return false; // No duplicates found
  }
  
  const hasDuplicate = checkDuplicatePanchayatCodes(csvData);
  
  if (hasDuplicate) {
    console.log('Duplicate panchayatCode found.');
  } else {
    console.log('No duplicate panchayatCode found.');
  }

  checkDuplicatePanchayatCodes(csvData)