class DevOneep {
    constructor(devName, cryptoSkillLevel, cryptoBalance) {
      this.devName = devName;
      this.cryptoSkillLevel = cryptoSkillLevel || 'Intermediate';
      this.cryptoBalance = cryptoBalance || 0;
      this.cryptoProjects = [];
    }
  
    developCryptoProject(projectName, projectDifficulty) {
      const projectReward = projectDifficulty * 10; // Simplified logic for reward based on project difficulty
      this.cryptoBalance += projectReward;
  
      const cryptoProject = {
        name: projectName,
        difficulty: projectDifficulty,
        reward: projectReward,
      };
      this.cryptoProjects.push(cryptoProject);
  
      console.log(`${this.devName} developed ${projectName} with a difficulty of ${projectDifficulty}. Earned ${projectReward} crypto coins.`);
    }
  
    displayDevInfo() {
      console.log(`
        DevOneep Information:
        Developer Name: ${this.devName}
        Crypto Skill Level: ${this.cryptoSkillLevel}
        Crypto Balance: ${this.cryptoBalance} coins
        Crypto Projects: ${this.cryptoProjects.map(project => `${project.name} - Difficulty: ${project.difficulty}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const devOneepUser = new DevOneep('CryptoDev', 'Advanced', 50);
  
  devOneepUser.developCryptoProject('Decentralized Exchange', 8);
  devOneepUser.developCryptoProject('Smart Contract Audit', 5);
  devOneepUser.displayDevInfo();
  