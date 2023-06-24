function studyRecommendation(mathScore, physicsScore, englishScore) {
  if(englishScore < 70 && physicsScore < 75 && mathScore < 80){
    return `Maaf, tidak ada rekomendasi yang dapat kami berikan`;
  }
  let recomStudy = 'Rekomendasi jurusan yang bisa dipilih: ';

  if(englishScore >= 85 && physicsScore >= 85 && mathScore >=85){
    recomStudy += 'Teknik Informatika;';
  }
  if(physicsScore >= 75 && mathScore >= 80){
    recomStudy += 'Teknik;';
  }
  if(mathScore >= 80 && englishScore >= 70){
    recomStudy += 'Ekonomi;';
  }
  if(englishScore >= 70){
    recomStudy += 'Sastra Inggris;';
  }
  if (mathScore >= 80){
    recomStudy += 'Matematika;';
  }
  if (physicsScore >= 75){
    recomStudy += 'Fisika;';
  }
  return recomStudy;
}

console.log(studyRecommendation(0, 0, 0));
console.log(studyRecommendation(80, 75, 70));
console.log(studyRecommendation(85, 85, 85));
console.log(studyRecommendation(80, 75, 85));
console.log(studyRecommendation(80, 85, 70));
console.log(studyRecommendation(85, 75, 70));
console.log(studyRecommendation(85, 85, 70));
console.log(studyRecommendation(80, 85, 85));
console.log(studyRecommendation(85, 75, 85));
console.log(studyRecommendation(85, 85, 85));

module.exports = studyRecommendation;
