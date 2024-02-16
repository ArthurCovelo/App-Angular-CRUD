using Microsoft.EntityFrameworkCore;
using WebApi_Dotnet.Models;

namespace WebApi_Dotnet.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        public DbSet<FuncionarioModel> Pessoas { get; set; }
    }
}